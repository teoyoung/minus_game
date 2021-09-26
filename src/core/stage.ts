import { Container } from "pixi.js";
import AssetsManager, {AssetsDesc} from "../engine/assets_manager";
import {ConfigResouces} from './types_config';

export interface loadDesc {
    assets: AssetsDesc 
}

export default class Stage {

    public readonly view: Container = new Container();
    
    protected assets_manager: AssetsManager = new AssetsManager();
    protected config: {[key: string]: string | number}

    public async load(desc: ConfigResouces){
        if(!desc){
            return;
        }
        const {assets, config} = desc;
        this.config = config;
        await this.assets_manager.init(assets);
    }

    public create(){}
    public postTransition(){}

}