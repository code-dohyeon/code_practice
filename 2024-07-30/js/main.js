class Main {
    constructor() {
        let col = this.col = 20;
        let rows = this.rows = 10;
        let block_size = 30;
        let canvas = this.canvas = document.querySelector(".canvas");
            canvas.width = rows * block_size;
            canvas.height = col * block_size;

        if(canvas.getContext) {
            let ctx = this.ctx = canvas.getContext("2d");
            ctx.scale(block_size, block_size);
        }

        let grid = this.getEmptyBoard();
        console.log(grid);

        let shape = this.shape = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]

        let startX = this.startX = 1;
        let startY = this.startY = 0;

        this.draw();
    }

    getEmptyBoard() {
        return Array.from(
          {length: this.col}, () => Array(this.rows).fill(0)
        );
      }

      draw() {
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                console.log(`row: ${row}, Y: ${y}, value: ${value}, X: ${x}`);
                if(value > 0) {
                    this.ctx.fillRect(this.startX + x, this.startY + y, 1, 1);
                }
            });
        });
      }
}

window.onload = () => {
    new Main();
}