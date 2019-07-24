import * as PIXI from 'pixi.js';
export class Scene {

    public stage: PIXI.Container | null;
    public tree:any
    public game: PIXI.Application;
    public nextStage: string;
    public isActive: boolean;

    constructor(game:PIXI.Application, tree:any){
        this.tree = tree;
        this.game = game;
        this.game.ticker.add(() => {
            this.update();
        });  
    }

    public clear(){
        this.exit();
        console.log('clear');
        this.game.stage.removeChild(this.stage);  
        this.isActive = false;
    }

    public create(){
        this.stage = new PIXI.Container();
        this.game.stage.addChild(this.stage);
        this.isActive = true;
    }

    public exit(){
        console.log('exit');
    }

    public update(){
    }
}