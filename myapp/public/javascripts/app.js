var Connection = require("./Connection");
var $ = require("jquery");
var paper = require("paper");


$(function(){
    var connection = new Connection();
// Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    window.paper = paper
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
        // Since the example image we're using is much too large,
        // and therefore has way too many pixels, lets downsize it to
        // 40 pixels wide and 30 pixels high:
        raster.size = new paper.Size(40, 30);

        for (var y = 0; y < raster.height; y++) {
            for(var x = 0; x < raster.width; x++) {
                // Get the color of the pixel:
                var color = raster.getPixel(x, y);
                console.log(color)

                // Create a circle shaped path:
                var path = new paper.Path.Circle({
                    center: new paper.Point(x, y) * gridSize,
                    radius: gridSize / 2 / spacing
                });

                // Set the fill color of the path to the color
                // of the pixel:
                path.fillColor = color;
            }
        }
        paper.view.draw();

        // Move the active layer to the center of the view, so all
        // the created paths in it appear centered.
        //project.activeLayer.position = view.center;
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





