import * as PIXI from 'pixi.js';
import { Signal } from './signal';

export class UiController {

    private viewUi: PIXI.Container;
    private btUp: PIXI.Sprite;
    private btBottom: PIXI.Sprite;
    private btLeft: PIXI.Sprite;
    private btRight: PIXI.Sprite;

    public onRight: Signal;
    public onLeft: Signal;
    public onUp: Signal;
    public onBottom: Signal;

    constructor(view: PIXI.Container){

        this.onRight = new Signal();
        this.onLeft = new Signal();
        this.onUp = new Signal();
        this.onBottom = new Signal();

        this.viewUi = new PIXI.Container();
        this.viewUi.x = 0;
        this.viewUi.y = 0;
        this.btUp = PIXI.Sprite.from('img/up.png');
        this.btBottom = PIXI.Sprite.from('img/bottom.png');
        this.btLeft = PIXI.Sprite.from('img/left.png');
        this.btRight = PIXI.Sprite.from('img/right.png');

        // Opt-in to interactivity
        this.btRight.interactive = true;
        this.btRight.buttonMode = true;

        this.btLeft.interactive = true;
        this.btLeft.buttonMode = true;

        this.btUp.interactive = true;
        this.btUp.buttonMode = true;

        this.btBottom.interactive = true;
        this.btBottom.buttonMode = true;

        // Pointers normalize touch and mouse
        this.btRight.on('pointerdown', () => { this.onRight.call()});
        this.btLeft.on('pointerdown', () => { this.onLeft.call()});
        this.btUp.on('pointerdown', () => { this.onUp.call()});
        this.btBottom.on('pointerdown', () => { this.onBottom.call()});

        this.btBottom.y = 150;
        this.btLeft.y = 90;
        this.btLeft.x = -150;
        this.btRight.y = 90;
        this.btRight.x = 150;

        this.viewUi.addChild(this.btUp);
        this.viewUi.addChild(this.btBottom);
        this.viewUi.addChild(this.btLeft);
        this.viewUi.addChild(this.btRight);

        view.addChild(this.viewUi);
    }

    public left() {
        console.log(this);
    }

    public show(){

    }
}