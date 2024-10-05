import { createTdsForTrUI } from "./ui.js";

function showTdsForTrUI(name, price, id) {
  const parentElement = document.getElementById(id);
  parentElement.innerHTML = createTdsForTrUI(name, price, id)
}

export { showTdsForTrUI }