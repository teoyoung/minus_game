import * as PIXI from 'pixi.js';
import { Scene } from '../modules/scene';
import {TweenMax} from "gsap";

export class Intro extends Scene {
    private el: PIXI.Sprite;
    private el2: PIXI.Sprite;
    private title: PIXI.Sprite;
    private tut: PIXI.Sprite;
    private btn: PIXI.Sprite;
    private an_logo: TweenMax;
    private an_logo2: TweenMax;
    private an_logo3: TweenMax;
    private tut_anim: TweenMax;
    private time: any;

    private element: PIXI.Sprite;
    public stageName = 'intro';

    public create() {
        super.create();

        this.el = PIXI.Sprite.from('img/intro/r_el.png');
        this.title = PIXI.Sprite.from('img/intro/logo.png');
        this.el2 = PIXI.Sprite.from('img/intro/l_el.png');
        this.tut = PIXI.Sprite.from('img/tut.jpg');
        this.btn = PIXI.Sprite.from('img/btn.png');
        
        this.btn.interactive = true;
        this.btn.buttonMode = true;
        this.btn.visible = false;
        this.tut.alpha = 0.0;

        this.btn.on('pointerdown', () => { 
            this.tree.select('stage', 'current').set('gamePlace');
        });
        this.btn.x = 240;
        this.btn.y = 750;

        this.tut.x = 160;
        this.tut.y = 450;

        this.title.x = 200;
        this.el.x = 450;
        this.el2.x = 150;

        this.title.y = -200;
        this.el.y = -200;
        this.el2.y = -200;

        this.addAnimation();
        
        this.stage.addChild(this.tut); 
        this.stage.addChild(this.btn); 
        this.stage.addChild(this.el2); 
        this.stage.addChild(this.el); 
        this.stage.addChild(this.title); 
    }

    private addAnimation(){
        this.an_logo = new TweenMax(this.title, 1.5, {y:300, paused:true});
        this.an_logo2 = new TweenMax(this.el, 2.3, {y:250, paused:true});
        this.an_logo3 = new TweenMax(this.el2, 2.3, {y:250, paused:true});
        this.tut_anim = new TweenMax(this.tut, 2.3, {alpha:1, paused:true});
        

        this.an_logo.eventCallback("onComplete", () => {
            this.btn.visible = true;
            this.tut.visible = true;
        });

        this.time = setTimeout(() => { 
            this.an_logo.play();
            this.an_logo2.play();
            this.an_logo3.play();
            this.tut_anim.play();
        }, 1000);
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