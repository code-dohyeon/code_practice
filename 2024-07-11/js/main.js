class Main {
    constructor() {
        let gage_bar = this.gage_bar = document.querySelector(".gage_bar");
        let gage = this.gage;

        let circle = this.circle = document.querySelector(".circle");
        let visual_container = this.visual = document.querySelector(".visual_container");

        let radius = 0;
        this.addEvent(radius);

    }

    addEvent(radius) {
        window.addEventListener("scroll", e => {
            this.gage = Math.floor(((window.scrollY + screen.height) / document.body.clientHeight) * 100);
            // console.log(this.gage);

            this.gage_bar.style.width = `${this.gage}%`;
        });

        this.visual.addEventListener("wheel", e => {
            if(this.visual.scrollTop > 0 && this.visual.scrollTop + this.visual.clientHeight < this.visual.clientHeight) {
                radius = e.deltaY >= 0 ? radius -= 1 : radius += 1;
            }

            console.log(this.visual.scrollTop > 0, this.visual.scrollTop + this.visual. < this.visual.clientHeight);
        });
    }
}

window.onload = () => {
    new Main;
}