import * as PIXI from 'pixi.js';
import { Scene } from '../modules/scene';
import {TweenMax} from "gsap";

export class Win extends Scene {

    private btn: PIXI.Sprite;
    private text: PIXI.Sprite;

    public stageName = 'win';

    public create() {
        super.create();

        this.btn = PIXI.Sprite.from('img/repeat.jpg');
        this.text = PIXI.Sprite.from('img/end.jpg');

        this.btn.interactive = true;
        this.btn.buttonMode = true;
        this.btn.on('pointerdown', () => { 
            this.tree.select('stage', 'current').set('intro');
        });

        this.text.x = 60;
        this.text.y = 400;

        this.btn.x = 260;
        this.btn.y = 700;
        
        this.stage.addChild(this.text); 
        this.stage.addChild(this.btn); 
        console.log(this.stageName);
    }

    public exit(){
        console.log('Выход из интро');
        super.exit();
    }

    public update(){
        if(!this.isActive){
            return;
        }
        super.update();
    }
}