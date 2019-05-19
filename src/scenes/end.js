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

        this.game.screen.rect(0,0, 50, 50, 'ffeeff');     
        this.game.screen.rect(20, 20, 50, 50, 'ffeeff');     
        //this.game.screen.fill('#ff00ff');
        this.game.screen.addText(110, 240, 'Спасибо за игру', '#ff00ff', 45);

    }

}