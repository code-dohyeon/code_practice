class Main {
    constructor() {
        let requireUrl = this.requireUrl = 'https://raw.githubusercontent.com/code-dohyeon/code_practice/main/2024-07-29/main.json'; // 불러올 url 경로
        let request = this.request = new XMLHttpRequest(); // 서버와 통신 함수 불러오기

        this.readJson();
    }

    readJson() {
        this.request.open("GET", this.requireUrl); // 로컬 경로의 파일을 가져오는 함수
        this.request.send(); // 요청을 서버에 전송

        this.request.onload = () => { // 요청이 들어간 순간 아래 명령들을 수행함
            let json = this.request.response; // 요청된 JSON 파일을 받아옴
            console.log(JSON.parse(json)); // 받아온 JSON 파일을 딕셔너리 형태로 파싱함
        }
    }
}

window.onload = () => {
    new Main();
}

