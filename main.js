song1="";
song2="";

function preload(){
  song1=loadSound("song_1.mp3");
  song2=loadSound("song_2.mp3");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
  }

  function draw(){
    image(video,0,0,400,300);
}
  