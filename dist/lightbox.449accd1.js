const enlaces=document.querySelectorAll(".ul .a"),lightbox=document.querySelector(".lightbox"),grow=document.querySelector(".big"),close=document.querySelector(".close");function create(e){const t=document.createElement("p");t.className="description",t.innerHTML=e,console.log(t),lightbox.appendChild(t)}enlaces.forEach(((e,t)=>{enlaces[t].addEventListener("click",(t=>{t.preventDefault();let l=e.querySelector(".img").src;console.log(l);let o=t.target.alt;console.log(o),lightbox.classList.add("true"),grow.setAttribute("src",l),create(o)}))})),close.addEventListener("click",(()=>{lightbox.classList.remove("true"),lightbox.removeChild(lightbox.lastElementChild)}));
//# sourceMappingURL=lightbox.449accd1.js.map
