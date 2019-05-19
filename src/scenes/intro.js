import { Scene } from "../scene";

export class Intro extends Scene {

    constructor(game){
        super(game);
        this.nexScene = "table";
        document.addEventListener('keydown', (event) => this.event(event, true));
    }

    event(e){
        switch (e.keyCode) {
            case 32: // Space 
            this.game.screen.clear();
            this.isActive = false;
            break;        
        }        
    }

    init(){
        this.render();
        super.init();
        
    }

    update(){

    }

    render(){  
    
        //this.game.screen.fill('#ff00ff');
        this.game.screen.addText(150, 140, 'МИНУС', '#282828', 45);  
        this.game.screen.addText(30, 210, 'Ваша задача добраться до цели не потратив все жизни', '#282828', 18);       
        this.game.screen.addText(60, 340, 'Нажми пробел чтобы начать игру', '#282828', 24);

    }

}