var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire46c0;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire46c0=a);var o=a("4Bu0d"),d=a("1tHc5"),r=a("6naOk"),l=a("aDR0T");let i,c,u=0;const m=document.getElementById("total_price"),f=document.getElementById("cart__btn"),p=document.getElementById("name"),g=document.getElementById("lastname"),s=document.getElementById("email"),y=document.getElementById("phone"),E=document.getElementById("place"),v=document.getElementById("date"),h=document.getElementById("form__item__dropDownList");function B(e,t){let n=0;e.forEach((e=>{n+=parseInt(e.price)})),function(e,t){u=e,c=t,m.innerText=l.currencyFormat(e)}(n,t)}d.onAuthStateChanged(o.auth,(async e=>{e&&(i=e,cart=await r.getFirebaseCart(o.db,i.uid)),B(cart,i.uid)})),f.addEventListener("click",(e=>{alert("¡Compra éxitosa! \nName: "+p.value+" "+g.value+"\nEmail: "+s.value+"\nPhone: "+y.value+"\nMétodo de pago: "+h.value+"\nDirección: "+E.value+"\nFecha de entrega: "+v.value)}));
//# sourceMappingURL=checkout.5c50abc4.js.map