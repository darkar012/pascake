var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire46c0;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire46c0=r);var o=r("4Bu0d"),a=r("1tHc5"),c=r("6naOk"),i=r("aDR0T");i=r("aDR0T");r("etBjH");const d=document.getElementById("cart"),l=document.getElementById("total"),u=document.getElementById("shopping_btn");let s=[];function g(e){let t=0;e.forEach((e=>{!function(e){const t=document.createElement("li");t.className="product",t.innerHTML=`\n\n    <img src="${e.img}" class="product_image">\n    <h2 class="product_name">${e.name}</h2>\n    <h3 class="product_description">${i.currencyFormat(e.price)} ${e.description}</h3>\n    <button class="product_delete">Eliminar producto</button>\n    `,d.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("remove it!"),async function(e){const t=s.filter((t=>t.id!==e));s=t,userLogged&&await c.createFirebaseCart(o.db,userLogged.uid,t);i.addProductToCart(t),d.innerHTML="",g(t)}(e.id))}))}(e),t+=parseInt(e.price)})),l.innerText="Total a pagar: "+i.currencyFormat(t)}u.addEventListener("click",(e=>{window.location.href="../checkout.html"})),a.onAuthStateChanged(o.auth,(async e=>{e?(userLogged=e,s=await c.getFirebaseCart(o.db,userLogged.uid)):s=i.getMyLocalCart(),g(s)}));
//# sourceMappingURL=shopping.597f7ebe.js.map
