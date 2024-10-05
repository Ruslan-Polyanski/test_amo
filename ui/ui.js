const tbodyElement = document.querySelector('tbody');

const spinUI = `<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>`;

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



export { spinUI, tbodyElement, createSvgCircleUI }