const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

const moves = {
    [KEY.LEFT]: (p) => ({...p, x: p.x - 1}),
    [KEY.RIGHT]: (p) => ({...p, x: p.x + 1}),
    [KEY.DOWN]: (p) => ({...p, y: p.y + 1}),
    [KEY.UP]: (p) => ({...p, y: p.y - 1}),
    [KEY.SPACE]: (p) => ({...p, y: p.y + 1})
}

function play() {
    board.reset();
    console.table(board.grid);

    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
}play();

document.addEventListener("keydown", e => {
    let p = moves[e.keyCode](board.piece);

    if(e.keyCode === KEY.SPACE) {
        while(board.valid(p)) {
            board.peice.move(p);
            p = moves[KEY.DOWN](board.piece);
        }
    }
    else if(moves[e.keyCode]) {
        event.preventDefault();

        console.log(p);
        if(board.valid(p)) {
            board.piece.move(p); 
        };

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        board.piece.draw();
    }

    
});
