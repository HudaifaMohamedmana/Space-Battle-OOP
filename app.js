const roundList = document.querySelector('.round')    
let x =1;
class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attacks(){
        let RandomAccuracy = Math.floor(Math.random() * (7.5 - 6 + 1) + 6);
        if (RandomAccuracy <= currentPlayer.accuracy) {
            let remainingHP = currentDefnder.hull - currentPlayer.firepower;
            currentDefnder.hull = remainingHP
            const attackHit = document.createElement('li');
            attackHit.innerHTML =`you got a hit ${currentPlayer.name} remaining HP of ${currentDefnder.name} is: ${remainingHP}`;
            roundList.appendChild(attackHit)
            console.log(`you got a hit ${currentPlayer.name} accuracy is ${RandomAccuracy}`)
            console.log(`remainingHP of player ${currentDefnder.name} is: ${remainingHP}`);
         } else {
            let remainingHP = currentDefnder.hull
            const attackMis = document.createElement('li');
            attackMis.innerHTML =`${currentPlayer.name} missed: ${currentDefnder.name} his HP is : ${remainingHP}`;
            roundList.appendChild(attackMis)
            console.log(`do you need glases ${currentPlayer.name} you missed:${currentDefnder.name} his HP is : ${remainingHP}`);
            console.log(`your accuracy is${currentPlayer.accuracy} you need at lest ${RandomAccuracy}`)
        }
    }
}
const USSAssembly = new Ship("USS Ship",20,3,7);
let alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
let alienFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
let alienAeccuracy = Math.random() * (8 - 6 + 1) + 6;
function getAlien() {
    alienHull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    alienFirepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    alienAeccuracy = Math.random() * (8 - 6 + 1) + 6;
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
function round(i) {
    const attackS = document.createElement('li');
    attackS.innerHTML =`-------------------- round ${i} -------------------- `;
    roundList.appendChild(attackS) 
    currentPlayer.attacks();
    while (currentDefnder.hull > 0) {
        playerTurn() 
        currentPlayer.attacks();
        alienShip.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        alienShip.accuracy = Math.random() * (8 - 6 + 1) + 6;    
    }
    const attackTXT = document.createElement('li');
    attackTXT.innerHTML =`the winer in round ${i} is ${currentPlayer.name} HP ${currentPlayer.hull}`;
    roundList.appendChild(attackTXT);
    console.log(`the winer in round ${i} is ${currentPlayer.name} HP ${currentPlayer.hull}`);
    getAlien();
    alienShip.hull =  Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    let x = i +1;
    if (x<=6) {
        const newAlienShip = document.getElementById(`alienShip${x}`);
        newAlienShip.style.display = 'block';
        const oldAlienShip = document.getElementById(`alienShip${i}`);
        oldAlienShip.style.display = 'none';
    }  
}
document.querySelector('.attack').addEventListener('click', function() { 
    const audioElement = document.getElementById('background-audio');
    audioElement.volume = 0.2; 
    if (x <= 6) {
        if (USSAssembly.hull >= 0) {
            round(x);
            console.log('-----------------------------');   
            x++    
        }else if (USSAssembly.hull <= 0) {alert(`you lost the game ${currentPlayer.name}`)}
    } else if (x > 6) {
        alert(`you wins the game ${currentPlayer.name}`)   
    }
});
document.querySelector('.surrender').addEventListener('click', function() {
    if (x >= 2) {
        alert(`you surrender ${currentPlayer.name}`)
        window.location.reload();      
    }
});
document.querySelector('.restart').addEventListener('click', function() { window.location.reload();});
const audioElement = document.getElementById('background-audio');
audioElement.volume = 0.2; 