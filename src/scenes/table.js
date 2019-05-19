import { Scene } from "../scene";
import { maps, Maps } from "../source/map";
import { Grid } from "../grid";
import { Player } from "../player";

export class Table extends Scene {

    constructor(game){
        super(game);
        this.nexScene = "end";
        this.level = 0;
        this.maps = new Maps().maps;
        this.player = new Player(this.maps, this.level, 0, 0, 10);
        this.grid = new Grid(game, this.player);
        document.addEventListener('keydown', (event) => this.event(event, true));
    }

    init(){
        super.init();
        this.render();
    }

    event(e){

        if(this.isActive){
     
            switch (e.keyCode) {
                case 39: // Right
                    this.player.moveRight();
                    this.render();
                    break;
                case 37: // left
                    this.player.moveLeft();
                    this.render();
                    break;
                case 40: // Down
                    this.player.moveDown();
                    this.render();
                    break;
                case 38: // Up
                    this.player.moveUp();
                    this.render();
                    break;
            }

        }

    }

    restert(){
        this.maps = new Maps().maps;
        this.player.restart(this.maps, 10);
        this.render();
    }

    nextLevel(){
        this.player.level = this.level;
        this.player.x = 0;
        this.player.y = 0;
        this.player.hp = 10;
        this.player.win = false;
        this.player.render();
    }

    render(){
        if(this.player.dead){            
            this.restert();
        } else if(this.player.win){
            this.level += 1;
            if( this.maps[this.level]){
                this.nextLevel();
            } else {
                this.game.screen.clear();
                this.isActive = false;
            }
            
        }
        if (this.isActive){
            this.grid.render(this.maps, this.level);
        }
        
    }

}