const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")


/*================  SHOW MENU ================*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
/*================  HIDE MENU ================*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
/*================  REMOVE MOBILE MENU ================*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*================ CHANGE BACKGROUND HEADER ================*/
function scrollHeader() {
    const header = document.getElementById("header")
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)


/*================ TESTIMONIAL SWIPER ================*/
var swiper = new Swiper(".testimonial-wrapper", {
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
    },
});

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
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*================ THTME/DISPLAY CUSTOMIZATION ================*/
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active")
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '12px';
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '14px';
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '18px';
        }

        // To change font size of root html 
        document.querySelector('html').style.fontSize = fontSize;
    })
})


/*================ PRIMARY COLORS ================*/
// remove class 
const changeActiveClass = () => {
    colorPalette.forEach(colorpicker => {
        colorpicker.classList.remove('active')
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add("active")
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

/*================ THEME BACKGROUND ================*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

// change background colors 
Bg1.addEventListener('click', () => {
    // add active classes
    Bg1.classList.add('active');
    // remove active classess from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');

    // remove customize changes from local storage 
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active classes
    Bg2.classList.add('active');
    // remove active classess from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active classes
    Bg3.classList.add('active');
    // remove active classess from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})


/*================ PORTFOLIO FILTER (DOT) ================*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
portfolioItems = document.querySelectorAll(".portfolio-item"),
totalPortfolioItem =portfolioItems.length;


for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function() {
        filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for(let k=0; k<totalPortfolioItem; k++){
        if(filterValue === portfolioItems[k].getAttribute("data-category")){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
        else{
            portfolioItems[k].classList.add("hide");
            portfolioItems[k].classList.remove("show");
        }
        if(filterValue === "all"){
            portfolioItems[k].classList.remove("hide");
            portfolioItems[k].classList.add("show");
        }
    }

    })
}

/*================ Scroll Seciton Active ================*/
const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}