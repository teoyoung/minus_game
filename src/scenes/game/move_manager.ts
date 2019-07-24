import { Signal } from '../../modules/signal';

class Player {
    private posX: number = 0;
    private posY: number = 0;

    public setPosition(x:number, y:number){
        this.posX = x;
        this.posY = y;
    }

    public getPosition(): {x:number, y:number}{
        return {x: this.posX, y: this.posY };
    }
}


export class MoveManager { 

    private tree: any;
    private playerPosition: {x: number, y: number } = {x:0, y:0};
    private player: Player;
    private maxX: number;
    private maxY: number;

    public map: string[][];

    public onComplete: Signal;
    public onNextLevel: Signal;
    public onRestartLevel: Signal;

    constructor(tree:any){
        this.tree = tree;
        this.player = new Player();
        this.onComplete = new Signal();
        this.onNextLevel = new Signal();
        this.onRestartLevel = new Signal();        
        document.addEventListener('keydown', (key) => this.event(key));
    }

    public init(map: string[][]){
        this.map = map;
        console.log('MoveManager', this.map);
        let pos = this.player.getPosition();
        // this.map[pos.y][pos.x] = ' ';
        this.player.setPosition(0, 0);
        this.map[0][0] = 'p';
        this.onComplete.call();
        
    }

    public getMapSize(): {x:number, y:number}{
        this.maxX = 0;
        this.maxY = this.map.length;

        for (let y = 0; y < this.map.length; y++) {
            let max: number = this.map[y].length;
            if(max > this.maxX){
                this.maxX = max;
            }
        }
        return { x: this.maxX, y: this.maxY };
    }

    public move(x: number, y:number){
        console.log(this.map);
        let pos = this.player.getPosition();

        let oldPos:{x: number, y: number } = {x:0, y:0};
        oldPos.x = pos.x;
        oldPos.y = pos.y;
        
        let newPos = this.calcPos(pos, x, y);

        if(!this.searchStep(newPos.x, newPos.y)){
            return;
        }

        if(this.map[newPos.y][newPos.x] != ' '){
            this.setValue(newPos.x, newPos.y);
        }

        if(this.map[newPos.y][newPos.x] == 'x'){
            this.onNextLevel.call();
            return;
        }

        if(!this.checkHp()){
            this.onRestartLevel.call();
            return;
        }

        this.player.setPosition(newPos.x, newPos.y);
        this.map[oldPos.y][oldPos.x] = ' ';
        this.map[newPos.y][newPos.x] = 'p';
        this.onComplete.call();
    }

    private searchStep(x: number, y:number): boolean {
        if(x >= this.maxX || x < 0){
            return false;
        }
        if(y >= this.maxY || y < 0){
            return false;
        }
        if(this.map[y][x] === '#'){
            return false;
        }
        return true;
    }

    private setValue(x: number, y:number) {        
        let valueTree = this.tree.select('player', 'hp');
        let data: string = this.map[y][x];

        let result: number;
        let fold = +data.charAt(1);

        if(data.charAt(0) === '+'){
            result = +valueTree.get() + fold;
        } else {
            result = +valueTree.get() - fold;
        }

        valueTree.set(`${result}`);
    }

    private checkHp(): boolean{
        let result = this.tree.select('player', 'hp');
        if(result.get() < 0){
            return false;
        }
        return true;
    }

    private calcPos(pos: {x: number, y: number }, x: number, y: number):{x: number, y: number }{
        switch (x) {
            case 1:
                pos.x += 1;
                break;
            case 2:
                pos.x -= 1;
                break;
        }
        switch (y) {
            case 1:
                pos.y += 1;
                break;
            case 2:
                pos.y -= 1;
                break;
        }

        return {x: pos.x, y: pos.y};
    }

    private event(key: any){
        switch (key.keyCode) {
            case 39: // right
                this.move(1,0);              
                break;
            case 37: // left
                this.move(2,0);                      
                break;                  
            case 40: // down
                this.move(0,1);                      
                break; 
            case 38: // up
                this.move(0,2);                      
                break;   
            default:
                    console.log(key.keyCode);
                break;
        }
    }
}