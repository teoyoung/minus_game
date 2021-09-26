import InitStage from "../../core/init_stage";
import Lobby from "./lobby";
import WindowLobby from "./window";

export default class InitLobby extends InitStage {
    public init(){
        this.setStageMap({
            'lobby': Lobby,
            'windowLobby': WindowLobby
        });
        this.setResources({
            config: './resouces/lobby/config.json'
        })
    }
}