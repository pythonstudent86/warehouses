import dataListTransition from '../../output.json';
import titleWarehouseTPL from '../templates/wh-store-section.hbs';

let dataWH = {
  arr222: [],
  arr227: [],
  arrSalatoviy: [],
  arrHueviy: [],
  arr255: [],
  arrVisokiy: [],
  arrZeleniy: [],
  arrRzhaviy: [],
  arrNoviy: [],
  arrKrasniy: [],
  arrBlizhniy: [],
  arrDalniy: [],
  arrVoskresenka: [],
};

for (const key in dataListTransition) {
  switch (dataListTransition[key].location) {
    case '222':
      dataWH.arr222.push(dataListTransition[key]);
      break;
    case '227':
      dataWH.arr227.push(dataListTransition[key]);
      break;
    case '255':
      dataWH.arr255.push(dataListTransition[key]);
      break;
    case 'С':
      dataWH.arrSalatoviy.push(dataListTransition[key]);
      break;
    case 'Х':
      dataWH.arrHueviy.push(dataListTransition[key]);
      break;
    case 'В':
      dataWH.arrVisokiy.push(dataListTransition[key]);
      break;
    case 'З':
      dataWH.arrZeleniy.push(dataListTransition[key]);
      break;
    case 'Р':
      dataWH.arrRzhaviy.push(dataListTransition[key]);
      break;
    case 'Н':
      dataWH.arrNoviy.push(dataListTransition[key]);
      break;
    case 'К':
      dataWH.arrKrasniy.push(dataListTransition[key]);
      break;
    case 'Б':
      dataWH.arrBlizhniy.push(dataListTransition[key]);
      break;
    case 'Д':
      dataWH.arrDalniy.push(dataListTransition[key]);
  }
}

let titleOfWarehouse = [];
for (const item in dataWH) {
  if (dataWH[item].length !== 0) {
    titleOfWarehouse.push(dataWH[item][0].location);
  }
}

const mainContainer = document.querySelector('.werhouse-container');

mainContainer.insertAdjacentHTML(
  'beforeend',
  titleWarehouseTPL(titleOfWarehouse),
);

export { dataWH };
