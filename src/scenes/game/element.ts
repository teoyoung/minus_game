import * as PIXI from 'pixi.js';

abstract class viewElement {

    public textures: any;
    public view: PIXI.Container;
    public style: PIXI.TextStyle;

    constructor( view: PIXI.Container ){
        this.view = view;
        this.textures = {
            "wall": PIXI.Texture.from('img/place/elWall.png'),
            "track": PIXI.Texture.from('img/place/track.png'),
            "minus": PIXI.Texture.from('img/place/minus.png'),
            "plus": PIXI.Texture.from('img/place/plus.png'),
            "finish": PIXI.Texture.from('img/place/finish.png'),
            "bg": PIXI.Texture.from('img/place/elBg.png')
        }

        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: '#ffffff',
        });
    }

}

export class Element extends viewElement{

    private block: PIXI.Container = new PIXI.Container();
    private element: PIXI.Sprite;
    public value: PIXI.Text;

    public create(x: number, y:number, type: string, value?: string | undefined){

        let texture = this.textures[type];
        this.element = new PIXI.Sprite(texture);

        this.value = new PIXI.Text(value,this.style);
        this.value.x = 20;
        this.value.y = 8;

        this.block.addChild(this.element);
        this.block.addChild(this.value);  

        if(value){
            this.value.visible = true;
        } else {
            this.value.visible = false;
        }

        this.block.x = x;
        this.block.y = y;
        
        this.view.addChild(this.block);
        
    }

    public update(type: string){
        let texture = this.textures[type];
        this.element.texture = texture;
        if(type === 'minus' || type === 'plus'){
            this.value.visible = true;
        } else {
            this.value.visible = false;
        }
    }

}