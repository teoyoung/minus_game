import Stage from "../../core/stage";

export default class Lobby extends Stage {
    public postTransition(){
        const lal = this.assets_manager.getSprite('test', this.view);
    }
}