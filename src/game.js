import {RenderCanvas} from './render-canvas';
import {EventsConvert} from './events-convert';
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
        this.currentScene = this.scenes.table;
        this.currentScene.init();
        this.eventsConvert = new EventsConvert();
        document.addEventListener('keydown', (event) => this.keyboardEvents(event));
        ui_controller.addEventListener("touchstart", (event) => this.touchEvents(event));
    }

    event(){      
        if(this.currentScene.isActive === false ){
            this.currentScene = this.scenes[this.currentScene.nexScene];
            this.currentScene.init();
        }
    }

    keyboardEvents(e){
        let keyCode = this.eventsConvert.keyboard(e);
        this.currentScene.event(keyCode);
        this.event();
    }

    touchEvents(e){
        let keyCode = this.eventsConvert.touch(e);
        this.currentScene.event(keyCode);
        this.event();
    }
    
}