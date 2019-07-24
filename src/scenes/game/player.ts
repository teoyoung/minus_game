import * as PIXI from 'pixi.js';

export class Player {
    private player: PIXI.Sprite;
    private value: PIXI.Text;
    private view: PIXI.Container;
    private tree: any;
    constructor(view: PIXI.Container, tree: any){

        this.tree = tree;

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: '#ffffff',
        });
        
        this.value = new PIXI.Text('10',style);
        this.value.x = 8;
        this.value.y = 8;
        this.player = PIXI.Sprite.from('img/place/elPl.png');
        this.player.addChild(this.value);
        this.view = view;
        this.view.addChild(this.player);

        const that = this;
        tree.select('player').on('update', function() {
            that.setValue()
        });   
    }

    private setValue(){
        let value: string = this.tree.select('player', 'hp').get();
        console.log('hp', value);
        this.value.text = value;
    }
    
    public init(){
        this.view.removeChild(this.player);
        this.view.addChild(this.player);
    }

    public move(x:number, y:number, ){
        this.player.x = x;
        this.player.y = y;
    }
}