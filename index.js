import"./assets/styles-BK7AYJoX.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";async function u(t){const r="https://dummyjson.com/products"+"/category-list";return(await o.get(r)).data}const p=async(t=1)=>{const e=`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`;try{return(await o.get(e)).data}catch(r){console.log("Товари не дійшли з серверу:",r)}};function d(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>`}function l(t){return t.unshift("All"),t.map(d).join("")}const m=t=>{const s=document.querySelector(".products"),e=t.map(({thumbnail:r,title:c,brand:n,categary:a,price:i})=>`<li class="products__item" data-id="">
            <img class="products__image" src="${r}" alt=""/>
            <p class="products__title">${c}</p>
            <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
            <p class="products__category">Category: ${a}</p>
            <p class="products__price">Price: ${i}</p>
         </li>`).join("");console.log(e),s.insertAdjacentHTML("beforeend",e)},g=document.querySelector(".categories");async function _(){return g.insertAdjacentHTML("beforeend",l(await u()))}_();const y=async()=>{const s=await p(1);m(s.products)};y();
//# sourceMappingURL=index.js.map
