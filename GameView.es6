class View {
    constructor(){
        this.canvas = document.getElementById;
        this.ctx = this.canvas.getContext('2d');
    }
    
    
    draw(pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillRect(pos.x, pos.y, 10, 10)
    }
}
module.exports = View;
