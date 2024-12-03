let musica;

function preload(){
  musica = loadSound("trilha.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}