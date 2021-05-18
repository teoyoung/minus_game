import { Application } from "pixi.js";
import BaobabManager, {BaobabSelect} from "./engine/baobab_manager";
import { boot } from "./engine/boot";
import { Scene } from "./modules/scene";
import { GamePlace } from "./scenes/game_place";
import { Intro } from "./scenes/intro";
import { Win } from "./scenes/win";

export default class GameEngine {

    private readonly game: Application;
    private readonly stageMap: {[stage: string]: new (game: Application, tree:any) => Scene};
    private readonly baobabManager: BaobabManager;

    constructor() {
        this.game = new Application({
            width: 720, height: 1080, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1,
        });

        this.stageMap = {
            intro: Intro,
            gamePlace: GamePlace,
            win: Win,
        };

        this.baobabManager = new BaobabManager();


        this.initStage();
    }

    private async initStage() {
        const config = await boot.loadConfig('res/lal.json');
        console.log(config);
    }

    public create(){
        document.body.appendChild(this.game.view);
    }

}