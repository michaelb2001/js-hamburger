elementHM = document.querySelector(".fa-bars");
elementHM.addEventListener("click" , function(){

    const element = document.querySelector('.hamburger-menu');

    element.className = element.classList + " active";
});