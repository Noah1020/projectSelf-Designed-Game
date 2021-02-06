const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var allPlayers;
var gameState = 0;
var playerCount = 0;

var game, form, player;

var snowman1, snowman2, snowman3, snowman4;
var snowmans;
var snowmanImage;
var treeImage;

var tree1;
var tree2;
var tree3;
var tree4;
var tree5, tree6, tree7, tree8;
var tree1Group,tree2Group,tree3Group,tree4Group;

var snow, snowImage;
var snowGroup;

function preload(){

  snowmanImage = loadImage("snowman.png");
  treeImage = loadImage("tree.png");
  snowImage = loadImage("smoke.png");

}


function setup() {
  createCanvas(1500,1000);
  engine = Engine.create();
  world = engine.world;
///
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  tree1Group = new Group();
  tree2Group = new Group();
  tree3Group = new Group();
  tree4Group = new Group();
  edges = createEdgeSprites();

  snowGroup = new Group();

}
function draw() {
  background(230);
  Engine.update(engine);
///
 

if(playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}


}