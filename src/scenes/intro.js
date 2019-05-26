import { Scene } from "../scene";

export class Intro extends Scene {

    constructor(game){
        super(game);
        this.nexScene = "table";
        //document.addEventListener('keydown', (event) => this.event(event, true));
    }

    event(e){
        if(this.isActive){
            this.game.screen.clear();
            this.isActive = false;
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
        this.game.screen.addText(300, 90, 'Beta 1.1', '#282828', 18);       
        this.game.screen.addText(50, 210, 'Доберись до цели не потратив все баллы', '#282828', 18);       
        this.game.screen.addText(20, 340, 'Нажми любую кнопку чтобы начать', '#282828', 24);

    }

}