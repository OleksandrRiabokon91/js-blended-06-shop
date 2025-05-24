//Функцію для створення, рендеру або видалення розмітки

function crieitElem(string) {
  const markap = `<li class="categories__item">
   <button class="categories__btn" type="button">${string}</button>
 </li>`;
  return markap;
}

export function crieitElements(params) {
  params.unshift('All');
  return params.map(crieitElem).join('');
}

export const renderProducts = products => {
  const productsUlEl = document.querySelector('.products');
  const markup = products
    .map(({ thumbnail, title, brand, categary, price }) => {
      return `<li class="products__item" data-id="">
            <img class="products__image" src="${thumbnail}" alt=""/>
            <p class="products__title">${title}</p>
            <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
            <p class="products__category">Category: ${categary}</p>
            <p class="products__price">Price: ${price}</p>
         </li>`;
    })
    .join('');
  console.log(markup);
  productsUlEl.insertAdjacentHTML('beforeend', markup);
};
