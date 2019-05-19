export class RenderCanvas {

    constructor( width, height ){
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas( width, height );
        this.context = this.canvas.getContext('2d');
    }

    createCanvas( width, height ){
        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    fill(color){
        this.context.fillStyle = color;
        this.context.fillRect(0,0, this.width, this.height);
    }

    text(x, y, text, color){
        this.context.fillStyle = color;
        this.context.font = "18px serif";
        this.context.fillText(text, x, y);
    }

    addText(x, y, text, color, size){
        this.context.fillStyle = color;
        this.context.font = size + "px serif";
        this.context.fillText(text, x, y);
    }

    rect(x, y, width, height, color ){
        this.context.fillStyle = color;
        this.context.fillRect(x,y, width, height);
    }

    box(x, y ){
        this.context.fillStyle = '#f3f300';
        this.context.fillRect(x,y, 50, 50);
    }


}