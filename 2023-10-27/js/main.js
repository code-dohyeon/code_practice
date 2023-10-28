let backgrounds = document.querySelectorAll(".content_background");
let index = 1;
let logo = document.querySelector("svg");
let nav = document.querySelector("nav");
let menus = document.querySelectorAll(".menu");
let inner_height = [innerHeight, innerHeight*2, innerHeight*3];

function addEvent() {
    for (let i = 0; i < menus.length; i++) {
        menus[i].addEventListener("click", () => {
            window.scrollTo(0, inner_height[i]);
        }, false);
    }

    window.addEventListener("scroll", e => {
        if(window.scrollY < 929) {
            logo.style.fill="#ffffff";
            nav.style.color="white";
        }
        else { 
            logo.style.fill="#000000";
            nav.style.color="black";
            }
    }, false);
    
    logo.addEventListener("click", () => {
        window.scrollTo(0, 0);
    }, false);
}; addEvent();


setInterval(() => {
    console.log(index);
    if(index > 2) {
        index = 1;
        backgrounds[1].style="opacity: 0; z-index: 0;";
        backgrounds[2].style="opacity: 0; z-index: 0;";
    }
    else {
        backgrounds[index].style="opacity: 1; z-index: 1;";
        index += 1; 
    }
}, 5000);
