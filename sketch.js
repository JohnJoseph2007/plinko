const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var en, wo;
var plinko = [];
var division = [];
var particles = [];

var divH = 300;

function setup(){
    createCanvas(480,800);
    en = Engine.create();
    wo = en.world;

    gr = new Ground(240, 795, 480, 10);

    for(var i = 0; i <= 480; i += 80) {
      division.push(new Div(i, 800 - divH/2, 20, divH));
    }

    for(var i = 50; i <= 430; i += 40) {
      plinko.push(new Plinko(i, 100, 10));
    }

    for(var i = 30; i <= 450; i += 40) {
      plinko.push(new Plinko(i, 200, 10));
    }

    for(var i = 50; i <= 430; i += 40) {
      plinko.push(new Plinko(i, 300, 10));
    }

    for(var i = 30; i <= 450; i += 40) {
      plinko.push(new Plinko(i, 400, 10));
    }
}

function draw(){
    background(0);
    Engine.update(en);
    text(frameCount, 10, 10);

    if(frameCount%20===0) {
      particles.push(new Particle(random(150, 360), 10, 8))
    }

    gr.display();

    for(var i = 0; i < division.length; i++) {
      division[i].display();
    }

    for(var j = 0; j < particles.length; j++) {
      particles[j].display();
    }

    for(var j = 0; j < plinko.length; j++) {
      plinko[j].display();
    }
}