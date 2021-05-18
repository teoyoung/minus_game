import { Container } from "pixi.js";

export let anchorePointServices: AnchorePointServices;

export default class AnchorePointServices {

    private currentView: Container;

    public static init(){
        anchorePointServices = new AnchorePointServices();
    }

    public initStage(view: Container) {
        this.clearAnchors();
        this.currentView = view;
    }

    private clearAnchors(){}

}