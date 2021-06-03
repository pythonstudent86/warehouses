import positionListTPL from '../templates/wh-list.hbs';
import { dataWH } from './open-json-file';
import compareWarehouse from './comparison-function';
import queryMainElement from './html-elements-query';

queryMainElement.warehouseTitle.forEach(elem => {
  const contentWarehouse = compareWarehouse(dataWH, elem.textContent);
  const positionListSection = elem.parentNode.nextElementSibling;
  positionListSection.id = elem.textContent;
  positionListSection.insertAdjacentHTML(
    'beforeend',
    positionListTPL(contentWarehouse),
  );
});
