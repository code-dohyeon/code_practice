let backgrounds = document.querySelectorAll(".content_background");
let logo = document.querySelector("svg");
let nav = document.querySelector("nav");
let menus = document.querySelectorAll(".menu");
let header = document.querySelector("header");
let video = document.querySelector("video");
let inner_height = [0, innerHeight, innerHeight*2, innerHeight*3];
let index = 1;
let page = 0;
let wheel = true;

header.style.left=`${(innerWidth - 1440) / 2}px`;
video.height=innerHeight;

function addEvent() {
    for (let i = 1; i < menus.length+1; i++) {
        menus[i-1].addEventListener("click", () => {
            window.scrollTo(0, inner_height[i]);
        }, false);
    }

    window.addEventListener("scroll", e => {
        if(window.scrollY < innerHeight*2) {
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

    window.addEventListener("wheel", (e) => {
        e.preventDefault();

        if(e.deltaY > 0 && page < inner_height.length-1) {
            page += 1;
            window.scrollTo(0, inner_height[page]);
            console.log(`page: ${page}, height: ${inner_height[page]}`);

        }
        else if(e.deltaY < 0 && page > 0) {
            page -= 1;
            window.scrollTo(0, inner_height[page]);
            console.log(`page: ${page}, height: ${inner_height[page]}`);

        }
    }, { passive: false });
}; addEvent();


setInterval(() => {
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
