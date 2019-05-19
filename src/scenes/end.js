import { Scene } from "../scene";

export class End extends Scene {

    constructor(game){
        super(game);
    }

    init(){
        this.render();
        super.init();        
    }

    render(){  

        this.game.screen.addText(150, 140, 'Конец', '#282828', 45);  
        this.game.screen.addText(128, 210, 'Спасибо за внимание', '#282828', 18);       

    }

}