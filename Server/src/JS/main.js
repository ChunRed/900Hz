
let canvas;

let canvas_width = 300;
let canvas_height = 300;

function setup() {

    canvas = createCanvas(canvas_width, canvas_height);
    let Parent = document.querySelector('.CanvasParent');

    canvas.parent(Parent);
    canvas.style("position", "relative");
    canvas.style("left", (innerWidth/2) - (canvas_width/2) + "px");
}


function draw(){
    background(100);
}