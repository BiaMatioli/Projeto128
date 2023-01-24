musica1 = "";
musica2 = "";

pulsoEsqX = 0;
pulsoEsqY = 0;

pulsoDirX = 0;
pulsoDirY = 0;

function preload(){
    musica1 = loadSound("music1.mp3");
    musica2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    pose = ml5.poseNet(video, modelLoaded);
    pose.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function tocar(){
    musica1.play();
}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        pulsoDirX = results[0].pose.rightWrist.x;
        pulsoDirY = results[0].pose.rightWrist.y;

        pulsoEsqX = results[0].pose.leftWrist.x;
        pulsoEsqY = results[0].pose.leftWrist.y;
        
        console.log(pulsoDirX, pulsoDirY, pulsoEsqX, pulsoEsqY);
    }
}
