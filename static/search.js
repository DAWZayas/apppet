const showElement = (element) => element.classList.remove("none-search");
const hideElement = (element) => element.classList.add("none-search");



function init() {
    const navLateral = document.querySelector(".search-box");
    hideElement(navLateral);
    render();
   
}

function render(){
    const menuButton = document.querySelector(".search-button");
    const navLateral = document.querySelector(".search-box");
    const main = document.querySelector("section");
    
    
    menuButton.addEventListener('click', () =>
        navLateral.classList.contains("none-search") ? showElement(navLateral) : hideElement(navLateral)
    );
    window.onscroll = () => hideElement(navLateral);
    main.addEventListener('click', () => hideElement(navLateral));
    

}

window.onload = () => init();