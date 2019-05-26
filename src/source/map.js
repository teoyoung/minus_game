import { throws } from "assert";

let maps = [];

let map_1 = [
    [' ', ' ', 9, ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 8, ' ', 8, ' ', ' '],
    [' ', ' ', 3, 4, 1, 3, 5, ' ', ' ', ' '],
    [' ', ' ', 8, 5, 3, 8, 5, ' ', ' ', ' '],
    [' ', 3, 2, 9, 'x', 5, 4, ' ', 8, ' '],
    [' ', ' ', 3, 3, 5, 8, 3, ' ', ' ', ' '],
    [' ', ' ', 5, 5, 9, 7, 9, ' ', ' ', ' '],
    [' ', ' ', 8, 4, 4, 8, 9, ' ', ' ', ' '],
    [8, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

maps.push(map_1);

let map_2 = [
    [' ', ' ', 9, ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [8, ' ', ' ', ' ', ' ', '_', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 8, ' ', 8, ' ', ' '],
    [8, 8, 3, 4, 1, 3, 5, ' ', ' ', ' '],
    [' ', ' ', 8, 5, 3, 8, 5, ' ', ' ', ' '],
    [' ', 3, 2, 9, 'x', 5, 4, ' ', 8, ' '],
    [' ', ' ', 3, 3, 5, 8, 3, ' ', ' ', ' '],
    [' ', ' ', 5, 5, 9, 7, 9, ' ', ' ', ' '],
    [' ', ' ', 8, 4, 4, 8, 9, ' ', ' ', ' '],
    [8, ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

maps.push(map_2);

class Maps {
    constructor(){

        this.hp = [10, 19, 11, 19 ];

        this.maps = [
            [
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', 'f', ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'f','f', 1, 9, 5, ' ', ' ', ' '],
                [' ', ' ', 'f','f', 3, 9, 'f', ' ', ' ', ' '],
                [' ', ' ', 2, 9, 'x', 9, 4, ' ', ' ', ' '],
                [' ', ' ', 'f', 'f', 9, 'f', 'f', ' ', ' ', ' '],
                [' ', ' ', 5, 9, 9, 9, 9, ' ', ' ', ' '],
                [' ', ' ', 'f', 4, 4, 8, 9, ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ],
            [
                [' ', 'f', ' ', 1, 1, 1, 1, 1, ' ', ' '],
                [' ', 'f', ' ', 'f', 1, 'f', 'f', 1, 'f', ' '],
                [' ', 'f', ' ', 'f', 1, 'f', 'f', 1, 'f', 'f'],
                [' ', 'f', ' ','f', 1, 1, ' ', ' ', ' ', 'f'],
                [' ',' ', ' ', 'f','f', 'f', 1, 'f', 1, 'f'],
                ['f', 'f', 'f', 'f', 'f', 'f', 2, 'f', 1, 'f'],
                [1, 2, ' ', ' ',2, 1, 1, ' ', 1, ' '],
                [2, 'f', ' ', ' ', 'f', ' ', ' ', ' ', ' ', ' '],
                [' ', 'x', 'f', 1, 'f', ' ', ' ', ' ', ' ', ' '],
                [' ', 2, 1, 3, ' ', ' ', ' ', ' ', ' ', ' '],
            ],
            [
                [' ', ' ', 6, ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'f', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', 'f',  2, 'f', 8, 'f', 8, ' ', ' '],
                [' ', 'f', 3, 4, 'f', 3, 5, 'f', 'f', ' '],
                [' ', 'f', 8, 'f', 4, 8, 5, ' ', 3, ' '],
                [' ', 3, 'f', 9, 'x', 5, 4, ' ', 8, ' '],
                [' ', 'f', 7, 'f', 4, 'f', 3, 2, ' ', ' '],
                [' ', ' ', 3, 3, 5, 'f', 9, ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', 4, 'f', 9, ' ', ' ', ' '],
                [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            ],
            [
                [' ', ' ', ' ', 1, ' ', ' ', ' ', ' ', ' ', ' '],
                [' ', ' ', ' ', 'f', 8, ' ', 'f', ' ', ' ', ' '],
                [' ', ' ', ' ', 'f', 9, 8, 'f', 3, 8, ' '],
                [' ', ' ', ' ', 'f', 6, 7, 9, 2, 9, ' '],
                [' ',' ', ' ', 'f','f', 'f', 5, 3, 7, ' '],
                [' ', ' ', ' ', 'f', 'x', 2, 4, 4, 8, ' '],
                [' ', ' ', ' ', 'f','f', 'f', 3, 4, 8, ' '],
                [' ', ' ', ' ', 'f', 9, 7, 'f', 2, ' ', ' '],
                [' ', ' ', ' ', 'f', 4, 8, 'f', 3, ' ', ' '],
                [' ', ' ', ' ', 1, ' ', ' ', ' ', ' ', ' ', ' '],
            ]
        ]

    }
}

export { maps, Maps };
