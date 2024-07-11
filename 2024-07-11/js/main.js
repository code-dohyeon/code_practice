class Main {
    constructor() {
        let container = document.createElement("ul");
            container.style = `width: 700px; height: 700px; position: relative; display: flex; align-content: center; justify-content: center; border: 1px solid black; flex-wrap: wrap;`;
            container.className="game_container";

            document.body.appendChild(container);

        let container_items = document.createElement("li");
            container_items.style=`width: calc(99%/50); height: calc(99%/50); border: 1px solid black;`;
    }


}

window.onload = () => {
    new Main();
}