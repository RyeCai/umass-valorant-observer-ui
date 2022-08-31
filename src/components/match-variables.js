//Temporary values
// let maps = {
//     current: 'Bind',
//     next: 'Ascent',
//     decider: 'Split'
// }

//starting from 0
let currMapNum = 2;

let maps = [
    {
        map: 'Bind',
        pick: 'left',
        winner: 'right'
    },
    {
        map: 'Ascent',
        pick: 'right',
        winner: 'left'
    },
    {
        map: 'Pearl',
        pick: 'left'
    },
    {
        map: 'Breeze',
        pick: 'right'
    },
    {
        map: 'Haven',
        pick: 'left'
    }

]

let leftTeam = {
    teamName: 'FNC',
    logoPath: '/fnatic.png',
    players: [
        {
            playerNum: 1,
            name: 'p1',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 2,
            name: 'p2',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 3,
            name: 'p3',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 4,
            name: 'p4',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 5,
            name: 'p5',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        }
    ],
    
}

let rightTeam = {
    logoPath: '/fnatic.png',
    players: [
        {
            playerNum: 1,
            name: 'p1',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 2,
            name: 'p2',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 3,
            name: 'p3',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 4,
            name: 'p4',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        },
        {
            playerNum: 5,
            name: 'p5',
            agent: 'Brimstone',
            grenade: 1,
            ability1: 1,
            ability2: 3,
            ult: 7
        }
    ],
}

export default {maps, mapScore, leftTeam, rightTeam}