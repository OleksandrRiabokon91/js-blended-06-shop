//Логіка сторінки Home

import { getCategory, getProducts } from './js/products-api';
import { crieitElements, renderProducts } from './js/render-function';

const categoryList = document.querySelector('.categories');

async function crieiteCategoris() {
  return categoryList.insertAdjacentHTML(
    'beforeend',
    crieitElements(await getCategory())
  );
}
crieiteCategoris();

const initialProducts = async () => {
  let currentPage = 1;
  const response = await getProducts(currentPage);
  renderProducts(response.products);
};

initialProducts();
