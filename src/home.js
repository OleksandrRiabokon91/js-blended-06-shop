//Логіка сторінки Home

import { getCategory } from './js/products-api';
import { crieitElements } from './js/render-function';

const categoryList = document.querySelector('.categories');

async function crieiteCategoris() {
  return categoryList.insertAdjacentHTML(
    'beforeend',
    crieitElements(await getCategory())
  );
}
crieiteCategoris();
