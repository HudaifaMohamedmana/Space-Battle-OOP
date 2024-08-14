class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    stats() {
        console.log(`this is the HP ${this.hull}`);
        console.log(`this is the firepower ${this.firepower}`);
        console.log(`this is the accuracy ${this.accuracy}`);
    }
    attacks(){
        let remainingHP = currentDefnder.hull - currentPlayer.firepower;
        currentDefnder.hull = remainingHP
        console.log(`remainingHP of player ${currentDefnder.name} is: ${remainingHP}`);
    }
}
const USSAssembly = new Ship("USS Ship",20,3,.7);
// USSAssembly.stats();

let alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
let alienFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
let alienAeccuracy = Math.random() * (0.8 - 0.6) + 0.6;

function getAlien() {
    alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    alienFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    alienAeccuracy = Math.random() * (0.8 - 0.6) + 0.6;

}
const alienShip = new Ship('alienShip',alienHull,alienFirepower,alienAeccuracy);              

let currentPlayer = USSAssembly;
let currentDefnder = alienShip;
function playerTurn() {
    if (currentPlayer === USSAssembly) {
        currentPlayer = alienShip;
        currentDefnder = USSAssembly;
    } else if (currentPlayer === alienShip) {
        currentPlayer = USSAssembly;
        currentDefnder = alienShip;
    }   
}
game()
function round(i) {
    currentPlayer.attacks();
    while (currentDefnder.hull > 0) {
        playerTurn() 
        currentPlayer.attacks();
        alienShip.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        alienShip.accuracy = Math.random() * (0.8 - 0.6) + 0.6;    
    }
    console.log(`the winer in round ${i+1} is ${currentPlayer.name}`);
    getAlien();
    alienShip.hull =  Math.floor(Math.random() * (6 - 3 + 1)) + 3;
}
    
function game() {
    for (let i = 0; i < 6; i++) {
        if (USSAssembly.hull >= 0) {
            round(i);
            console.log(`-----------------------------`)
        }else{
            console.log(`you lost on round${i+1}`)
        }
        

    }
    
}

    // A game round would look like this:
//      You attack the first alien ship
//      if the ship survives, it attacks you
//      If you survive, you attack the ship again
//      If it survives, it attacks you again ... etc

//      If you destroy the ship, you have the option to attack the next ship or to retreat
//      If you retreat, the game is over, perhaps leaving the game open for further developments or options
//      You win the game if you destroy all of the aliens
//      You lose the game if you are destroyed


// function attacks(attacker,defnder) {
//     let remainingHP = defnder - attacker;
//     return remainingHP
// }










// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8