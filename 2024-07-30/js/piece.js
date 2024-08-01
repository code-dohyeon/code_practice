class Piece {
    x;
    y;
    color;
    shape;
    ctx;

    constructor(ctx) {
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        this.shape = [
            [1, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];

        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            }) 
        });
        // console.log([KEY.RIGHT]);
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }
}