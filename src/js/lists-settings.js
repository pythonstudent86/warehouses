import queryMainElement from './html-elements-query';
import sendAlertMessage from './tegramm-bot-msg';

const positionItems = document.querySelectorAll('.werhouse-list-item');
const wareHousesItem = document.querySelectorAll('.werhouse-title-section');

function disablingPosition(position) {
  position.style.backgroundColor = '#c2c2c2';
  if (position.children[1].style.backgroundColor === 'red') {
    return;
  }
  position.children[1].style.backgroundColor = '#c2c2c2';
  position.children[1].style.color = '#000000';
}

function disableSection(mainElement) {
  mainElement.forEach(elem => {
    let count = 0;
    const arrLength = elem.nextElementSibling.children[0].childElementCount;
    const tempArr = elem.nextElementSibling.children[0].children;
    tempArr.forEach(elem => {
      if (elem.style.backgroundColor === 'rgb(194, 194, 194)') {
        count += 1;
      }
    });
    if (arrLength === count) {
      elem.style.backgroundColor = 'grey';
    }
  });
}

positionItems.forEach(elem => {
  const positionColor = localStorage.getItem(`q${elem.id}`);
  if (positionColor) {
    elem.children[1].style.backgroundColor = 'red';
    disablingPosition(elem);
  }
  const positionId = localStorage.getItem(elem.id);
  if (positionId === 'disable') {
    disablingPosition(elem);
  }
});

disableSection(wareHousesItem);

queryMainElement.mainContainer.addEventListener('click', eve => {
  // console.log(eve.target.classList);
  if (eve.target.classList.value === 'werhouse-title-section') {
    const positionList = eve.target.nextElementSibling;
    positionList.classList.toggle('hide');
  }

  if (eve.target.classList.value === 'werhouse-list-item') {
    disablingPosition(eve.target);
    localStorage.setItem(eve.target.id, 'disable');
  }
  if (eve.target.classList.value === 'item-name') {
    disablingPosition(eve.target.parentElement);
    localStorage.setItem(eve.target.parentElement.id, 'disable');
  }

  if (eve.target.classList.value === 'werhouse-list-item-q') {
    const tempQuantityItem = eve.target.textContent;
    const quantity = window.prompt('Изменить количество?');
    if (quantity === null || quantity === '') {
      return;
    }

    if (parseInt(quantity) !== parseInt(tempQuantityItem)) {
      localStorage.setItem(`q${eve.target.parentNode.id}`, 'red');
      eve.target.textContent = quantity;
      eve.target.style.backgroundColor = 'red';
    }
  }

  if (eve.target.classList.value === 'item-alert') {
    // console.log(eve.path[1].childNodes[1].textContent);
    const inputNewHarehouse = window.prompt();
    console.log(inputNewHarehouse);
    if (inputNewHarehouse === null || inputNewHarehouse === '') {
      return;
    } else {
      inputNewHarehouse.toUpperCase();
    }
    const messageTxt = `⚠️ Поменяйте пожалуйста склад хранения <i>${
      eve.path[1].childNodes[1].textContent
    }</i> - эта позиция на <b>" ${inputNewHarehouse.toUpperCase()} "</b> ⚠️`;
    sendAlertMessage(messageTxt);
  }
  disableSection(wareHousesItem);
});
