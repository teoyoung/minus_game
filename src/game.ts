import * as PIXI from 'pixi.js';
import { Intro } from './scenes/intro';
import { GamePlace } from './scenes/game_place';
import { Win } from './scenes/win';

export class Game {
    private game: PIXI.Application;
    private tree: any;
    private stages: any;
    private curStg: string;
    private nextStg: string;
    private view: PIXI.Container;
    private currentStage: string;


    constructor(tree: any){
        this.tree = tree;
        this.game = new PIXI.Application({
            width: 720, height: 1080, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1,
        });
        const that = this;
        this.tree.select('stage', 'current').on('update', function() {
            console.log('ds');
            that.nextStage();
        });

        this.stages = {
            "intro": new Intro(this.game, tree),
            "gamePlace": new GamePlace(this.game, tree),
            "win": new Win(this.game, tree),
        };
        this.currentStage = this.stages['intro'].stageName;
        this.stages['intro'].create();
    }

    private nextStage(){
        let current = this.tree.select('stage', 'current');
        console.log('ddd', current.get());
        this.stages[this.currentStage].clear();
        this.stages[current.get()].create();
        this.currentStage = current.get();
    }

    public create(){
        document.body.appendChild(this.game.view);
    }
}