import Stage from "../../core/stage";

export default class Grid extends Stage {
    public postTransition(){
        const lal = this.assets_manager.getSprite('place', this.view);
        console.log(this.config);
    }
}