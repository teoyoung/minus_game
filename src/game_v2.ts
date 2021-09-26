import { Application } from "pixi.js";
import InitStage from "./core/init_stage";
import Stage from "./core/stage";
import InitLobby from "./stages/lobby/initLobby";
import InitGrid from "./stages/grids/InitGrid";

interface ModulesMap {[stage: string]: new () => InitStage}

const modules: ModulesMap = {
    lobby: InitLobby,
    grid: InitGrid
}

export default class GameEngine {

    private readonly app: Application;
    private currentInit: InitStage;
    private currentStage: Stage;

    constructor() {
        this.app = new Application({
            width: 1080, height: 720, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(this.app.view);
        this.initModule('grid', 'grid');

        // setTimeout(() => {
        //     this.swithStage('windowLobby');
        // }, 9000);
    }

    private async initModule(name: string, startStage: string) {
        if(!modules[name]) {
            return;
        }
        this.currentInit = new modules[name];
        this.currentStage = await this.currentInit.getStage(startStage);
        this.app.stage.addChild(this.currentStage.view);
        this.currentStage.postTransition();
    }

    private async swithStage(name: string){
        this.app.stage.removeChild(this.currentStage.view);
        const stage = await this.currentInit.getStage(name);
        this.app.stage.addChild(stage.view);
        stage.postTransition();
    }

}