import { tbodyElement } from "./ui/ui.js";
import { showCardTaskUI } from "./ui/showCardTaskUI.js";
import { showTdsForTrUI } from "./ui/showTdsForTrUI.js";
import { getFirstDataFromServerWithDelay } from "./store/storeLeads.js";

const [storeLeads, getData] = getFirstDataFromServerWithDelay(1000);

getData()

async function handleClick(event) {
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
            showTdsForTrUI(item.name, item.price, item.id)
          }
        })
        storeLeads[i].stateCard = true;
        showCardTaskUI(event.target.parentElement, id)
      }
    }
  }
}

tbodyElement.addEventListener('click', handleClick)

