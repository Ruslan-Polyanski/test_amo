const tbodyElement = document.querySelector('tbody');

const createSvgCircleUI = (background) => {
  const xmlns = "http://www.w3.org/2000/svg";
  const boxWidth = 20;
  const boxHeight = 20;

  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttributeNS(null, "width", boxWidth);
  svg.setAttributeNS(null, "height", boxHeight);

  const circle = document.createElementNS(xmlns, "circle");
  circle.setAttributeNS(null, 'cx', '10');
  circle.setAttributeNS(null, 'cy', '10');
  circle.setAttributeNS(null, 'r', '10');
  circle.setAttributeNS(null, 'fill', background);

  svg.append(circle)

  return svg;
}

function createTdsForTrUI(name, price, id) {
  const tds = `<td data-label="Название">${name}</td>
                  <td data-label="Бюджет">${price}</td>
                  <td data-label="ID">${id}</td>
                `;
  return tds;
}

function createElementsCardForTrUI(name, id, date) {
  const divs = `
                  <div>${name}</div>
                  <div>${id}</div>
                  <div>${date}</div>
                `;

  return divs;
}

function createTrsForTbodyUI(storeLeads) {
  let trs = '';

  storeLeads.forEach(item => {
    const tr = `<tr id=${item.id} class='card'>
                  <td data-label="Название">${item.name}</td>
                  <td data-label="Бюджет">${item.price}</td>
                  <td data-label="ID">${item.id}</td>
                </tr>`;
    trs += tr;
  })

  return trs;
}

export { tbodyElement, 
         createSvgCircleUI, 
         createTdsForTrUI, 
         createElementsCardForTrUI, 
         createTrsForTbodyUI }