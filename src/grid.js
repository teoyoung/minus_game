import { maps } from "./source/map";

export class Grid {

    constructor(game, player){
        this.player = player;
        this.game = game;
        this.maps = maps;
        this.padding = 10;
        this.xCount = this.maps[0].length;
    }

    render(maps, level){

        let tile = this.game.width / this.xCount;
        let tileBox = tile - this.padding;

        let grid = maps[level];
        let width = this.game.width;

        this.game.screen.clear();
       
        for (let y = 0; y < grid.length; y++) {

            for (let x = 0; x < grid[y].length; x++) {
                
                switch (grid[y][x]) {
                        case 9:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "9", "#ffffff");
                                break;
                        case 8:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "8", "#ffffff");
                                break;
                        case 7:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "7", "#ffffff");
                                break;   
                        case 6:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "6", "#ffffff");
                                break;     
                        case 5:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "5", "#ffffff");
                                break;
                        case 4:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "4", "#ffffff");
                                break;  
                        case 3:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "3", "#ffffff");
                                break; 
                        case 2:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "2", "#ffffff");
                                break;
                        case 1:
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#262626');
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), "1", "#ffffff");
                                break;
                        case 'x':
                                this.game.screen.rect(x * tile - 2, y * tile - 2, tileBox + 4, tileBox + 4, "#3aa85c");
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, "#336b44");
                                break;
                        case 'p':
                                this.game.screen.rect(x * tile - 2, y * tile - 2, tileBox + 4, tileBox + 4, "#282828");
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, "#5d98ad");                            
                                this.game.screen.text(x * tile + ( tileBox / 2), y * tile + ( tileBox / 2), this.player.hp, "#ffffff");
                                break;
                        case 'z':
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, "#888888");
                                break;
                        case 'f':
                                this.game.screen.rect(x * tile - 2, y * tile - 2, tileBox + 4, tileBox + 4, "#282828");
                                this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, "#888888");
                                
                break;
                    default:
                        this.game.screen.rect(x * tile, y * tile, tileBox, tileBox, '#222222');
                        break;
                } 
            }
        }
    }






}