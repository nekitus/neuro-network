var Connection = require("./Connection");
var $ = require("jquery");
var paper = require("paper");


$(function(){
    var connection = new Connection();
// Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    window.paper = paper;
    var raster = new paper.Raster("mona");


// Hide the raster:
    raster.visible = false;

// The size of our grid cells:
    var gridSize = 12;

// Space the cells by 120%:
    var spacing = 1.2;

// As the web is asynchronous, we need to wait for the raster to load
// before we can perform any operation on its pixels.
    raster.on('load', function() {
        var imageData = raster.getImageData();

        connection.socket.emit("image-data", { imageData: imageData});
    });

// Move the active layer to the center of the view:

    // Аяксовый запрос к серверу
    //$.post("http://localhost:3000/some", function(data){
    //    setTimeout(function(){
    //        console.log("successed request", this.bla)
    //
    //    }.bind(data), 1)
    //})
});





