var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire46c0;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire46c0=r);var a=r("4Bu0d"),o=r("1tHc5"),c=r("6naOk"),i=r("aDR0T");i=r("aDR0T");r("etBjH");const d=document.getElementById("cart"),l=document.getElementById("total"),u=document.getElementById("shopping_btn");let s,p=[];function f(e){let t=0;e.forEach((e=>{!function(e){const t=document.createElement("li");t.className="product",t.innerHTML=`\n\n    <img src="${e.img}" class="product_image">\n    <h2 class="product_name">${e.name}</h2>\n    <h3 class="product_description">${i.currencyFormat(e.price)} ${e.description}</h3>\n    <button class="product_delete">Eliminar producto</button>\n    `,d.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("remove it!"),async function(e){const t=p.filter((t=>t.id!==e));p=t,s&&await c.createFirebaseCart(a.db,s.uid,t);i.addProductToCart(t),d.innerHTML="",f(t)}(e.id))}))}(e),t+=parseInt(e.price)})),l.innerText="Total a pagar: "+i.currencyFormat(t)}u.addEventListener("click",(e=>{window.location.href="../checkout.html"})),o.onAuthStateChanged(a.auth,(async e=>{e?(s=e,p=await c.getFirebaseCart(a.db,s.uid)):p=i.getMyLocalCart(),f(p)}));
//# sourceMappingURL=shopping.a8c56a97.js.map
