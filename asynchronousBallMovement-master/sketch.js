var database;
var canvas;
var gameState = 0;
var playerCount,form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;


function setup(){
    database = firebase.database();

   canvas =  createCanvas(displayWidth-20,displayHeight-20);

   game = new Game();
   game.getState();
   game.start();
}

function draw(){
    background("white");

    if (playerCount === 4){
        game.update(1)
    }
    if (gameState === 1){
        clear();
        game.play();

    }
}


