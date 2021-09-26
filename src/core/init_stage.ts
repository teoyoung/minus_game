import Stage, {loadDesc} from "./stage";
import {ConfigResouces} from './types_config';

type StageConstructor = new () => Stage;

interface StageMap {
    [key: string]: StageConstructor;
}

interface InitResources {
    config: string
}


export default class InitStage {
    private resources: InitResources;
    private stages: StageMap = {};

    constructor(){
        this.init();
    }

    public init(){}

    public async getStage(name: string): Promise<Stage> {
        if(!this.stages[name]){
            return;
        }

        const config = await this.getConfig<ConfigResouces>();
        const impl = new this.stages[name]();
        await impl.load(config);
        return impl;
    }

    private getConfig<T>(): Promise<T> {
        return new Promise((response, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", this.resources.config);
            request.responseType = "json";
            request.send();

            request.onload = async function () {
                console.log(request.response);
                response(request.response);
            };
        })
    }

    protected setStageMap(stages: StageMap = {}){
        this.stages = stages;
    }

    protected setResources(resources: InitResources){
        this.resources = resources || {
            config: ''
        };
    }

}