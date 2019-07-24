import {Game} from './game';
const Baobab = require('baobab');

var tree = new Baobab({
    stage: {
      current: 'intro',
      level: 0
    },
    player: {
        hp: '10'
    }
});

var stage = tree.select('stage', 'current');

const app = new Game(tree);  
// stage.on('update', function() {
//     app.init();
// });



window.onload = () => {
    app.create();
}