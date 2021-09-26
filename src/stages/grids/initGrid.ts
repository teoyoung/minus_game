import InitStage from "../../core/init_stage";
import Grid from "./grid";

export default class InitGrid extends InitStage {
    public init(){
        this.setStageMap({
            'grid': Grid
        });
        this.setResources({
            config: './resouces/grid/config.json'
        })
    }
}