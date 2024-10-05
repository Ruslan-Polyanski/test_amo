import { api } from "./api/api.js";
import { spinUI, tbodyElement, createSvgCircleUI } from "./ui/ui.js";
import { getConvertDateAndTimestamp } from "./utils/getConvertDateAndTimestamp.js";
import { getBackgroundStatusCardTask } from "./utils/getBackgroundStatusCardTask.js";
import { createTrsAndShow } from "./utils/createTrsAndShow.js";

const storeLeads = [];

async function saveLeads(page = 1) {
  const response = await api.getAllLeads(page, 3).then((data) => data);

  response._embedded.leads.forEach(item => {
    storeLeads.push({name: item.name, price: item.price, id: item.id, stateCard: false})
  });

  if(response._links.next) {
    setTimeout(() => {
      saveLeads(++page)
    }, 1000)
  }

}

saveLeads()

setTimeout(() => {
  createTrsAndShow(storeLeads, tbodyElement)
}, 5000)

function createTdsAndShow() {

}


tbodyElement.addEventListener('click', async (event) => {
  const id = +event.target.parentElement.id;

  for(let i = 0; i < storeLeads.length; i++) {

    if(storeLeads[i].id === id) {
      if(storeLeads[i].stateCard === true) {
        return;
      }
      if(storeLeads[i].stateCard === false) {
        storeLeads.forEach(item => {
          if(item.stateCard === true && item.id !== id) {
            item.stateCard = false;

            const trElement = document.getElementById(item.id); //создаем для этой функции

            const ui = `
                          <td data-label="Название">${item.name}</td>
                          <td data-label="Бюджет">${item.price}</td>
                          <td data-label="ID">${item.id}</td>
                        `;
            trElement.innerHTML = ui;
          }

        })
        storeLeads[i].stateCard = true;
        const tr = event.target.parentElement;
        tr.innerHTML = spinUI;

        const data = await api.getCardLead(id).then(data => data);

        const {date, timestampTask} = getConvertDateAndTimestamp(data.closest_task_at);
        
        const ui = `
          <div>${data.name}</div>
          <div>${data.id}</div>
          <div>${date}</div>
        `;
      
        tr.innerHTML = ui;

        const colorSVG = getBackgroundStatusCardTask(timestampTask)
        const circleSVG = createSvgCircleUI(colorSVG);

        tr.appendChild(circleSVG)
      }
    }

  }

})

