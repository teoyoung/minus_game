import { Tools } from '../../modules/tools';

export class MapManager {

    private tools: Tools;
    private config: any;
    private url: string;

    constructor(url: string) {
        this.url = url;
        this.tools = new Tools;
        this.getJson();
    }

    private getJson(){
        this.config = this.tools.getJSON(this.url);
    }

    public getMap(lvl: number): string[][]{
        this.getJson();
        return this.config.level[lvl];
    }

    public getGridPosition(lvl: number){
        let position: any = this.config.gridPosition[lvl]; // !!!
        if(!this.config.gridPosition[lvl]){
            position = {x: 300, y:300}
        }
        console.log('position', position);
        return position;
    }

    public getHp(lvl: number){
        let hp: string = this.config.hp[lvl]; // !!!
        if(!hp){
            hp = '10';
        }
        return hp;
    }

    public getMaxLevel(): number {
        return this.config.level.length - 1;
    }

}