import * as PIXI from 'pixi.js';
import { Element } from './element';
import { Tools } from '../../modules/tools';

export class Grid {

    private grid: PIXI.Container;
    private view: PIXI.Container;
    private padding: number;
    private maxX: number;
    private maxY: number;
    private tools: Tools;
    private elements: Element[][];
    private sizeX: number;
    private sizeY: number;

    constructor(view: PIXI.Container) {

        this.padding = 70;
        this.tools = new Tools();
        this.elements = [];
        this.view = view;
    }

    public create(map: string[][]){
        let size: {x:number, y:number} = {x: map[0].length, y: map.length};
        this.grid = new PIXI.Container();
        this.sizeX = size.x;
        this.sizeY = size.y;
        for (let x = 0; x < size.x; x++) {
            let arr = [];
            for (let y = 0; y < size.y; y++) {
                let el = new Element(this.grid);
                let type = this.tools.readMap(map[y][x]);
                let value: undefined | string = undefined;
                if(type === 'minus' || type === 'plus'){
                    value = map[y][x];
                }
                el.create(this.padding * x, this.padding * y, type, value); 
                arr.push(el);              
            }
            this.elements.push(arr);
        }
        this.view.addChild(this.grid);
    }

    public clear(){
        this.view.removeChild(this.grid); 
        this.elements = [];
    }

    public update(map: string[][]){
        for (let x = 0; x < this.sizeX; x++) {
            for (let y = 0; y < this.sizeY; y++) {   
                let type = this.tools.readMap(map[y][x]);   
                this.elements[x][y].update(type); 
            }
        }
    }

}