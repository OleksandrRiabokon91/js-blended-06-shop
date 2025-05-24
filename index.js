import"./assets/styles-BK7AYJoX.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";async function r(t){const n="https://dummyjson.com/products"+"/category-list";return(await o.get(n)).data}function i(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}function s(t){return t.unshift("All"),t.map(i).join("")}const c=document.querySelector(".categories");async function a(){return c.insertAdjacentHTML("beforeend",s(await r()))}a();
//# sourceMappingURL=index.js.map
