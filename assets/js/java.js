/*================ THTME/DISPLAY CUSTOMIZATION ================*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// open model 
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// close modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);