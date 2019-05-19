import {RenderCanvas} from './render-canvas';
import { Intro } from "./scenes/intro";
import { Table } from "./scenes/table";
import { End } from "./scenes/end";

export class Game {
    constructor(){
        this.width = 480;
        this.height = 480;
        this.screen = new RenderCanvas(this.width, this.height);
        this.scenes = {
            'intro': new Intro( this ),
            'table': new Table( this ),
            'end': new End( this )
        }
        this.currentScene = this.scenes.intro;
        this.currentScene.init();
        document.addEventListener('keydown', (event) => this.event(event, true));

    }

    event(e){
      
        if(this.currentScene.isActive === false){
            console.log("Смена сцены");
            this.currentScene = this.scenes[this.currentScene.nexScene];
            this.currentScene.init();
        }

    }

    run(){        
        console.log("3333");
    }

    update(){
        console.log('update');
    }
}