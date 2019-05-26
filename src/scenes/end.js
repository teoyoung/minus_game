import { Scene } from "../scene";

export class End extends Scene {

    constructor(game){
        super(game);
        this.nexScene = "intro";
    }

    init(){
        this.render();
        super.init();        
    }

    event(e){
        if(this.isActive){
            location.reload();
        }       
    }

    render(){  
        this.game.screen.addText(150, 140, 'Конец', '#282828', 45);  
        this.game.screen.addText(128, 210, 'Спасибо за внимание', '#282828', 18);    
        this.game.screen.addText(20, 340, 'Нажми любую кнопку чтобы начать', '#282828', 24);  
    }

}