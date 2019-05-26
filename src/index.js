import {Game} from "./game";

// ui_controller.addEventListener("touchstart", test, false);

// function test(e){
//     let target = e.target;
//     console.log(target.id);
// }
//el.addEventListener("touchend", handleEnd, false);
window.onload = () => {
    const app = new Game();
    app.run();
}