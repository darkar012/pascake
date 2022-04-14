//get images from DOM
const enlaces  = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const grow  = document.querySelector('.big');
const close   = document.querySelector('.close');


/*const images = document.getElementsByClassName("img");*/

//loop each image
enlaces.forEach(( everyLink , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault();
        //ruta de cada imagen, cuando se le haga click en la imagen chiquita pasa la ruta a la del lightbox (la grande)
        let link = everyLink.querySelector('.img').src;
        console.log(link);
        let title = e.target.alt;
        console.log(title);
       

        lightbox.classList.add('true')
        grow.setAttribute('src', link);

        /* openLightbox();*/
        create(title);
        
    })
})

//cerrar elementos
close.addEventListener('click', ()=>{
    lightbox.classList.remove('true');
    lightbox.removeChild(lightbox.lastElementChild);
})

//crear p con nombre del producto
function create(name){
    const productName = document.createElement("p");
    productName.className="description";
    productName.innerHTML= name;
    console.log(productName);
    lightbox.appendChild(productName);
};

