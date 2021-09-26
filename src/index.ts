import Boot from './engine/boot';
import {Game} from './game';
import GameEngine from './game_v2';

const Baobab = require('baobab');

// var tree = new Baobab({
//     stage: {
//       current: 'intro',
//       level: 0
//     },
//     player: {
//         hp: '10'
//     }
// });

// var stage = tree.select('stage', 'current');

// Boot.init();

// const app2 = new GameEngine();

// const app = new Game(tree);  
// // stage.on('update', function() {
// //     app.init();
// // });



// window.onload = () => {
//     app.create();
// }

const app = new GameEngine();