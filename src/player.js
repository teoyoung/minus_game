import { throws } from "assert";

export class Player {

    constructor( maps, level, x, y, hp ){
        this.maps = maps;
        this.hp = hp;
        this.level = level;
        this.x = x;
        this.y = y;
        this.dead = false;
        this.win = false;
        this.endGame = false;
        this.render();
    }

    restart(maps, hp){
        this.maps = maps;
        this.x = 0;
        this.y = 0;
        this.dead = false;
        this.win = false;
        this.hp = hp;
        this.render();
    }

    moveLeft(){
        let collider = this.collider(this.x - 1, this.y);
        if(collider){
            this.addTrack();
            this.x -= 1;
            this.render();
        }
    }

    moveRight(){
        let collider = this.collider(this.x + 1, this.y);
        if(collider){
            this.addTrack();
            this.x += 1;
            this.render();
        }
    }

    moveUp(){
        let collider = this.collider(this.x, this.y - 1);
        if(collider){
            this.addTrack();
            this.y -= 1;
            this.render();
        }
    }

    moveDown(){
        let collider = this.collider(this.x, this.y + 1);
        if(collider){
            this.addTrack();
            this.y += 1;
            this.render();
        }
    }

    collider( posX, posY ){

        if(!this.maps[this.level][posY][posX] || this.maps[this.level][posY][posX] === 'f'){
            console.log("Преграда", this.maps[this.level][posY][posX]);
        } else {
            if(this.maps[this.level][posY][posX] === 'x'){

                if(this.maps[this.level + 1]){
                    this.win = true;
                    alert("Отлично!");
                    return false;
                    
                } else {
                    this.win = true;
                    this.endGame = true;
                }

            } else {

                if( this.maps[this.level][posY][posX] != 'z'){

                    this.hp -= this.maps[this.level][posY][posX];
                    if(this.hp < 0){
                        this.dead = true;
                        return false;
                    }  

                }
              
            }

            return true;
        }
    }

    addTrack(){
        this.maps[this.level][this.y][this.x] = 'z';
    }

    render(){

        this.maps[this.level][this.y][this.x] = 'p';
        
    }

}