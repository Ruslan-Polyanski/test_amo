import { api } from "../api/api.js";
import { getConvertDateAndTimestamp } from "../utils/getConvertDateAndTimestamp.js";
import { getBackgroundStatusCardTask } from "../utils/getBackgroundStatusCardTask.js";
import { createElementsCardForTrUI, createSvgCircleUI } from "../ui/ui.js";
import { showSpinUI } from "./showSpinUI.js";

async function showCardTaskUI(parentElement, cardID) {

  showSpinUI(true, parentElement)

  const data = await api.getCardLead(cardID).then(data => data);

  const {date, timestampTask} = getConvertDateAndTimestamp(data.closest_task_at);
  
  const divs = createElementsCardForTrUI(data.name, data.id, date);

  const tdElement = document.createElement('td');
  tdElement.setAttribute('colspan', 3)

  const colorSVG = getBackgroundStatusCardTask(timestampTask)
  const circleSVG = createSvgCircleUI(colorSVG);

  tdElement.insertAdjacentHTML('beforeEnd', divs)
  tdElement.appendChild(circleSVG)

  showSpinUI(false, parentElement)

  parentElement.insertAdjacentElement('beforeEnd', tdElement)
}

export { showCardTaskUI }