const Baobab = require('baobab');

export interface BaobabSelect<T> {
    get(): T;
    set(value: T): void;
}


export default class BaobabManager {

    private readonly tree = new Baobab();

    constructor(){}

    public createPath<T>(path: string[], value: T){
        this.tree.set(path, value);
    }

    public attach<T, K = BaobabSelect<T>>(path: string[]): K {
        const [v, t] = path;
        return this.tree.select(v, t);
    }

    public detach(){}

}