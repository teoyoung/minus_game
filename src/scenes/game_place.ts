import * as PIXI from 'pixi.js';
import { Scene } from '../modules/scene';
import { Grid } from './game/grid';
import { Player } from './game/player';
import { MoveManager } from './game/move_manager';
import { strict } from 'assert';
import { MapManager } from './game/map_manager';
import { UiController } from '../modules/ui_controller';

export class GamePlace extends Scene {
    public stageName = 'gamePlace';
    private mapManager: MapManager;
    private moveManager: MoveManager;
    private ui: UiController;
    private player: Player;
    private viewGrid: PIXI.Container;
    private uiView: PIXI.Container;
    private grid: Grid;
    private lvl: number;
    private hp: string;

    public create(){
        super.create();
        this.lvl = 0;
        this.uiView = new PIXI.Container()
        this.uiView.x = 280;
        this.uiView.y = 750;

        this.viewGrid = new PIXI.Container()
        this.viewGrid.x = 200;
        this.viewGrid.y = 300;

        this.mapManager = new MapManager('./res/lal.json');
        this.hp = this.mapManager.getHp(this.lvl);
        this.moveManager = new MoveManager(this.tree);
        this.ui = new UiController(this.uiView);
        this.grid = new Grid(this.viewGrid);
        this.grid.create(this.mapManager.getMap(this.lvl));
        this.player = new Player(this.viewGrid, this.tree);

        this.moveManager.init(this.mapManager.getMap(this.lvl));
        this.moveManager.onComplete.add(() => {
            this.readMap();
        });
        this.moveManager.onNextLevel.add(() => {
            console.log('следующий уровень');
            let maxLvl: number = this.mapManager.getMaxLevel();
            console.log(this.lvl, maxLvl);
            if(this.lvl >= maxLvl){
                this.tree.select('stage', 'current').set('win');
                console.log('Вин');
            } else {
                this.nextLevel();
            }
        });
        this.moveManager.onRestartLevel.add(() => {
            console.log('restart');
            this.restart();
        });

        this.ui.onRight.add(() => {this.moveManager.move(1,0)});
        this.ui.onLeft.add(() => {this.moveManager.move(2,0)});
        this.ui.onUp.add(() => {this.moveManager.move(0,2)});
        this.ui.onBottom.add(() => {this.moveManager.move(0,1)});

        this.stage.addChild(this.uiView);
        this.stage.addChild(this.viewGrid);
        console.log(this.stageName);

    }

    private nextLevel(){
        this.lvl += 1;
        let position = this.mapManager.getGridPosition(this.lvl);
        this.viewGrid.x = position.x;
        this.viewGrid.y = position.y;
        this.restart();
    }

    private restart(){
        this.hp = this.mapManager.getHp(this.lvl);
        let hp = this.tree.select('player', 'hp');
        hp.set(this.hp);
        this.grid.clear();
        this.grid.create(this.mapManager.getMap(this.lvl));
        this.moveManager.init(this.mapManager.getMap(this.lvl));
        this.player.init();
        this.readMap();
    }

    private readMap(){
        if(!this.isActive){
            return;
        }
        let map: any = this.moveManager.map;
        for (let y = 0; y < map.length; y++) {
            for (let x = 0; x < map[y].length; x++) {
                if(map[y][x] === 'p'){
                    this.player.move(x * 70,y * 70);
                }                   
            }          
        }
        this.grid.update(map);
    }

    public exit(){
        console.log('Выход из гаме');
        super.exit();
    }

    public update(){
        if(!this.isActive){
            return;
        }
        super.update();
    }
}