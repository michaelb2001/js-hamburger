elementoComparsa = document.querySelector(".fa-bars");
elementoComparsa.addEventListener("click" , function(){


    const element = document.querySelector('.hamburger-menu');

    element.className = element.classList + " active";
});


elementoScomparsa = document.querySelector(".fa-times");
elementoScomparsa.addEventListener("click" , function(){

    const element = document.querySelector('.hamburger-menu');

    element.className  = element.className.replace(" active","");
});

