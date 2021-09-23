var mouseEvent = "empty";
var last_position_x,last_position_y;

var canvas= document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color = "black";
var width_line = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color_input").value;
    width_line = document.getElementById("line_width_input").value;

    mouseEvent = "mousedown";

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {

    var current_position_x = e.clientX - canvas.offsetLeft;
    var current_position_y = e.clientY - canvas.offsetTop;

    console.log(mouseEvent + " above if");
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;

        console.log(mouseEvent  + " above move to");
        ctx.moveTo(last_position_x,last_position_y);

        ctx.lineTo(current_position_x,current_position_y);

        ctx.stroke();
    }

    last_position_x = current_position_x;
    last_position_y = current_position_y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseLeave",my_mouseLeave);

function my_mouseLeave(e) {
    mouseEvent = "mouseLeave";
}


function clear_area() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}