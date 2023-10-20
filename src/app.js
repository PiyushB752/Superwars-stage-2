const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i = 0 ; i < PLAYERS.length ; i++ ){
        let playerinfo = {
            nameofplayer:PLAYERS[i],
            strengthofplayer:getRandomStrength(),
            imageofplayer:"images/super-"+(i+1)+".png",
            typeofplayer: i % 2 === 0 ? "hero" : "villain"
        };
        detailedPlayers.push(playerinfo);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()*100)
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(let i = 0 ; i < players.length; i++){
        if (players[i].typeofplayer === type ){
            fragment += `<div class="player"><img src="${players[i].imageofplayer}"><h2>${players[i].nameofplayer}</h2><p>Strength:${players[i].strengthofplayer}</p></div>`
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}