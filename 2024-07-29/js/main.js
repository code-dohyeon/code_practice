class Main {
    constructor() {
        let requireUrl = this.requireUrl = 'https:/https://raw.githubusercontent.com/code-dohyeon/code_practice/main/2024-07-29/main.json';
        let request = this.request = new XMLHttpRequest()

        this.readJson();
    }

    readJson() {
        this.request.open("GET", this.requireUrl);
        console.log(this.request.responseText);

        this.request.send(); 
    }
}

window.onload = () => {
    new Main();
}

