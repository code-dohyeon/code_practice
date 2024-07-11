class Main {
    constructor() {
        let container = this.container = document.createElement("ul");
            container.style = `width: 700px; height: 700px; position: relative; display: flex; align-content: center; justify-content: center; flex-wrap: wrap;`;
            container.className="game_container";

            document.body.appendChild(container);

            this.CreateItems();

    }

    CreateItems () {
        for(let i = 0; i < 100; i++) {
            let container_items = this.container_items = document.createElement("li");
            container_items.style=`width: calc(100%/10); height: calc(100%/10); border: 1px solid black;`;
            this.container.appendChild(this.container_items);
        }
    }


}

window.onload = () => {
    new Main();
}