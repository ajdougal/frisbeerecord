var scale = 5;
var players = [{x:10, y:40, color:"red", id:"r1"}];
var playerR = scale * 2;
var canvas;
var ctx;


$(document).ready(start());

function start() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    drawField();
    drawPlayers(players);
    addButtons();
}

function strokeRectangle(x, y, w, h, color) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function fillRectangle(x, y, w, h, color) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function strokeArc(x, y, r, start, stop, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, start, stop);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

function drawField(){
    var fieldW = scale * 40;
    var fieldH = scale * 110;
    var endzoneY = scale * 20;
    var field2H = scale * 70;

    var boundaryColor = "black";
    strokeRectangle(0,0,fieldW, fieldH, boundaryColor);
    strokeRectangle(0, endzoneY, fieldW, field2H, boundaryColor);
}

function drawPlayers(playersArray) {
    for (var i = 0; i < playersArray.length; i++) {
        var p = playersArray[i];
        strokeArc(p.x, p.y, playerR, 0, 2*Math.PI, p.color);
    }
}

function addRedPlayer() {
    console.log("add red player");
    var yy = Math.floor((Math.random() * 70 * scale) + 30 * scale);
    var xx = Math.floor(Math.random() * 40 * scale);
    players.push({x:xx, y:yy, color: "red", id: "r"+yy});
    clearAndRedraw();
}

function addBluePlayer() {
    var yy = Math.floor((Math.random() * 70 * scale) + 30 * scale);
    var xx = Math.floor(Math.random() * 40 * scale);
    players.push({x:xx, y:yy, color: "blue", id: "bx"+xx+"y"+yy});
    clearAndRedraw();
}

function clearPlayers() {
    players = [];
    clearAndRedraw();
}

function addButtons() {
    $("body").append('<button onclick="addRedPlayer()"></button>')
        .append('<button onclick="addBluePlayer()"></button>')
        .append('<button onclick="clearPlayers()"></button>');
}

function clearAndRedraw() {
    fillRectangle(0, 0, canvas.width, canvas.height, "white");
    drawField();
    drawPlayers(players);
}