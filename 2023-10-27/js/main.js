let backgrounds = document.querySelectorAll(".content_background");
let logo = document.querySelector("svg");
let nav = document.querySelector("nav");
let menus = document.querySelectorAll(".menu");
let header = document.querySelector("header");
let video = document.querySelector("video");
let html = document.querySelector("html");
let menu2_head = document.querySelector(".menu2_head");
let inner_height = [0, innerHeight, innerHeight*2, innerHeight*3, innerHeight*4];
let index = 1;
let page = 0;

window.onbeforeunload = () => {
    window.localStorage.setItem("scrollpos", window.scrollY);
    console.log(window.localStorage);
}

window.onload = () => {
    // console.log(window.localStorage);
    let scrollpos = window.localStorage.getItem("scrollpos")
    window.scrollTo(0, scrollpos);
    for (let i = 0; i < inner_height.length; i++) {
        if(inner_height[i] == window.scrollY) {
            page = i;
        }
    }
    window.localStorage.removeItem("scrollpos");
}

function init() {
    header.style.left=`${(innerWidth - 1440) / 2}px`;
    video.height=innerHeight;

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
}; init();


function addEvent() {
    for (let i = 1; i < menus.length+1; i++) {
        menus[i-1].addEventListener("click", () => {
            window.scrollTo(0, inner_height[i]);
            page = i;
            // console.log("a");
        }, false);
    }

    window.addEventListener("scroll", e => {
        e.preventDefault();
        if(window.scrollY < innerHeight*3) {
            logo.style.fill="#ffffff";
            nav.style.color="white";
        }
        else if(window.scrollY < innerHeight*4) {
            logo.style.fill="#000000";
            nav.style.color="black";
        }
        else if(window.scrollY < innerHeight*5) {
            logo.style.fill="#ffffff";
            nav.style.color="white";
        }
        else { 
            logo.style.fill="#000000";
            nav.style.color="black";
            }
        // console.log("a");

        if(window.scrollY > innerHeight*1) {
            menu2_head.style.opacity="1";
            menu2_head.style.transform="translate(-50%, 0px)";
            menu2_head.style.transition="1s";
            // console.log("a");
        }
        else {
            menu2_head.style.opacity="0";
            menu2_head.style.transform="translate(-50%, -500px)";
            menu2_head.style.transition="";
        }
    }, false, {passive : false});
    
    logo.addEventListener("click", () => {
        window.scrollTo(0, 0);
        page = 0;
        // console.log("a");
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
        // console.log("a");
    }, { passive: false });
}; addEvent();
