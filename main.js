const { fabric } = require("./fabric");

var Canvas = new fabric.Canvas("MyCanvas");

var S_Width = 30;
var S_Height = 30;

var Super_X = 10;
var Super_Y = 10;

var Super_I;
var Super_BI;

function Ply_Up(){
    fabric.Image.fromURL("player.png", function(Img){
        Super_I = Img;
        Super_I.scaleToWidth(150);
        Super_I.scaleToHeight(140);
        Super_I.set({top: Super_Y, left: Super_X});
        Canvas.add(Super_I);
    });
}
