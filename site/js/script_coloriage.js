// SETTING ALL VARIABLES

var isMouseDown=false;
var canvas = document.createElement('canvas');
var canvasObject = document.getElementById("canvasObject");
var ctx = canvas.getContext('2d');
var linesArray = [];
currentSize = 5;
var currentColor = "rgb(200,20,100)";
var currentBg = "white";
var pictures_texts = [
	"Nous donnons des hochets aux bébés, ça fait du bruit en le remuant et ça les amuse. Et pour les crows s'en servait aussi pour guerir les maladie",
	"Selon la croyance populaire, le capteur de rêve empêche les mauvais rêves d'envahir le sommeil de son détenteur. Agissant comme un filtre, il capte les songes envoyés par les esprits, conserve les belles images de la nuit et brûle les mauvaises visions aux premières lueurs du jour.",
	"Les amérindiens sont le peuples du continent américain autochtones qui occupaient les terres avant la colonisation par les Européens."

];
var pictures = [
	"img/coloriage/hochet.svg",
	"img/coloriage/Capteur-de-reve.svg",
	"img/coloriage/amerindien.svg"
];

// INITIAL LAUNCH

createCanvas();
pickRandomPicture();

// BUTTON EVENT HANDLERS
document.getElementById('colorpicker').addEventListener('change', function() {
	currentColor = this.value;
});
document.getElementById('bgcolorpicker').addEventListener('change', function() {
	ctx.fillStyle = this.value;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	redraw();
	currentBg = ctx.fillStyle;
});
document.getElementById('controlSize').addEventListener('change', function() {
	currentSize = this.value;
	document.getElementById("showSize").innerHTML = this.value;
});
document.getElementById('saveToImage').addEventListener('click', function() {
	downloadCanvas(this, 'canvas', 'masterpiece.png');
}, false);
document.getElementById('pen').addEventListener('click', pen);
document.getElementById('eraser').addEventListener('click', eraser);
document.getElementById('changepicture').addEventListener('click', pickRandomPicture);

// Get and display a random picture
function pickRandomPicture() {
	var picture_index = Math.floor(Math.random() * pictures.length);
    var pictureSRC = pictures[picture_index];
	var pictureBalise = document.createElement('img');
	pictureBalise.src = pictureSRC;
	document.getElementById("pictureToDraw").innerHTML = "";
	document.getElementById("pictureToDraw").appendChild(pictureBalise);
	document.getElementById("pictureText").innerHTML = pictures_texts[picture_index];
}

// REDRAW 
function redraw() {
	for (var i = 1; i < linesArray.length; i++) {
		ctx.beginPath();
		ctx.moveTo(linesArray[i-1].x, linesArray[i-1].y);
		ctx.lineWidth  = linesArray[i].size;
		ctx.lineCap = "round";
		ctx.strokeStyle = linesArray[i].color;
		ctx.lineTo(linesArray[i].x, linesArray[i].y);
		ctx.stroke();
	}
}

// DRAWING EVENT HANDLERS
canvas.addEventListener('mousedown', function() {mousedown(canvas, event);});
canvas.addEventListener('mousemove',function() {mousemove(canvas, event);});
canvas.addEventListener('mouseup',mouseup);

// CREATE CANVAS
function createCanvas() {
	canvas.id = "canvas";
	canvas.width = 400;
	canvas.height = 600;
	canvas.style.zIndex = 8;
	canvas.style.position = "absolute";
	canvas.style.border = "1px solid";
	ctx.fillStyle = currentBg;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	canvasObject.appendChild(canvas);
}

// DOWNLOAD CANVAS
function downloadCanvas(link, canvas, filename) {
	link.href = document.getElementById(canvas).toDataURL();
	link.download = filename;
}

function pen() {
	currentSize = document.getElementById('controlSize').value;
	currentColor = document.getElementById('colorpicker').value;
}


// ERASER HANDLING
function eraser() {
	currentSize = 50;
	currentColor = ctx.fillStyle
}

// GET MOUSE POSITION
function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

// ON MOUSE DOWN
function mousedown(canvas, evt) {
	var mousePos = getMousePos(canvas, evt);
	isMouseDown=true
	var currentPosition = getMousePos(canvas, evt);
	ctx.moveTo(currentPosition.x, currentPosition.y)
	ctx.beginPath();
	ctx.lineWidth  = currentSize;
	ctx.lineCap = "round";
	ctx.strokeStyle = currentColor;

}

// ON MOUSE MOVE
function mousemove(canvas, evt) {

	if(isMouseDown){
		var currentPosition = getMousePos(canvas, evt);
		ctx.lineTo(currentPosition.x, currentPosition.y)
		ctx.stroke();
		store(currentPosition.x, currentPosition.y, currentSize, currentColor);
	}
}

// STORE DATA
function store(x, y, s, c) {
	var line = {
		"x": x,
		"y": y,
		"size": s,
		"color": c
	}
	linesArray.push(line);
}

// ON MOUSE UP
function mouseup() {
	isMouseDown=false
	store()
}

document.getElementById('close').onclick = function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    return false;
};

// $(document).ready(function() {
// 	prepareCanvas();
// });
