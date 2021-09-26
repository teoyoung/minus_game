import { Container, Sprite, Texture } from "pixi.js"

export interface AssetsDesc {
    textures: {[key: string]: string};
}

export default class AssetsManager {
    private readonly textures: {[key: string]: Texture} = {}
    private readonly sprites: {[key: string]: Sprite} = {}

    public async init(desc: AssetsDesc) {
        if(!desc){
            return;
        }
        const {textures = {}} = desc;

        for ( const name in textures) {   
            if(!textures[name]){
                continue;
            }
            const url = textures[name];
            this.textures[name] = Texture.from(url);
        }
    }

    public getSprite(name: string, view: Container): Sprite {
        console.info('Not found texture ' + name);
        if(!this.textures[name]){
            return;
        }
        const sprite = new Sprite(this.textures[name]);
        sprite.anchor.set(0.5);
        view.addChild(sprite);
        return sprite;
    }
}