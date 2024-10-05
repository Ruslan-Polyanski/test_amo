import { createTrsForTbodyUI } from "./ui.js";

function showLeadsInTable(tbodyElement, storeLeads) {
  const trs = createTrsForTbodyUI(storeLeads)
  tbodyElement.insertAdjacentHTML('afterbegin', trs);
}

export { showLeadsInTable }