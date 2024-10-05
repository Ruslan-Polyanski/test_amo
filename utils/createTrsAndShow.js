function createTrsAndShow(storeLeads, parrentElement) {
  let Trs = '';

  storeLeads.forEach(item => {
    const ui = `<tr id=${item.id} class='card'>
                  <td data-label="Название">${item.name}</td>
                  <td data-label="Бюджет">${item.price}</td>
                  <td data-label="ID">${item.id}</td>
                </tr>`;
    Trs += ui;
  })

  parrentElement.insertAdjacentHTML('afterbegin', Trs);
}

export { createTrsAndShow }