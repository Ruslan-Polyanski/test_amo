import { api } from "../api/api.js";
import { tbodyElement } from "../ui/ui.js";
import { showLeadsInTable } from "../ui/showLeadsInTable.js";

function getFirstDataFromServerWithDelay(delay) {
  const storeLeads = [];

  const getData =  async function saveLeadsAndShow(page = 1) {
    const response = await api.getAllLeads(page, 3).then((data) => data);
  
    response._embedded.leads.forEach(item => {
      storeLeads.push({name: item.name, price: item.price, id: item.id, stateCard: false})
    });
  
    if(!response._links.next) {
      showLeadsInTable(tbodyElement, storeLeads)
    }
  
    if(response._links.next) {
      setTimeout(() => {
        saveLeadsAndShow(++page, delay)
      }, delay)
    }
  }

  return [storeLeads, getData];
}

export { getFirstDataFromServerWithDelay }