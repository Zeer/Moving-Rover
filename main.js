canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630530405150E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630780405175I01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044630050405102I01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631090503669C00_DXXX.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = nasa_mars_images_array[random_number];
console.log("background_image =" +background_image);
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);

}
function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}window.addEventListener("keydown",my_keydowm);
function my_keydowm(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up() {
    if(rover_y >=0)
    {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if(rover_y <=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function left() {
    if(rover_x >=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function right() {
    if(rover_x <=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
    
}