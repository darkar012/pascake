



const enlaces  = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const grow  = document.querySelector('.big');
const close   = document.querySelector('.close');


enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault();
        //ruta de cada imagen, cuando se le haga click en la imagen chiquita pasa la ruta a la del lightbox (la grande)
        let link = cadaEnlace.querySelector('.img').src
        console.log(link);

        lightbox.classList.add('true')
        grow.setAttribute('src', link);

    })
})

close.addEventListener('click', ()=>{
    lightbox.classList.remove('true');
})