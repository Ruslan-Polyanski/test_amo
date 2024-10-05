const spinUI = `<div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>`;

function showSpinUI(status, parentElement) {
  if(status === true) {
    parentElement.innerHTML = spinUI;
  }

  if(status === false) {
    parentElement.innerHTML = '';
  }
}

export { showSpinUI }
