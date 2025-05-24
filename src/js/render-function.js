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
