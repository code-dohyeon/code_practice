class Main {
    constructor() {
        let requireUrl = this.requireUrl = './js/main.json';
        let request = this.request = new XMLHttpRequest()

        this.readJson();
    }

    readJson() {
        this.request.open("GET", this.requireUrl);
        this.request.responseType = "json";
        this.request.send();

        let response = this.request.response;

        console.log(JSON.stringify(response));
    }
}

window.onload = () => {
    new Main();
}

