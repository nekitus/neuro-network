var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 4000;

function Connection(){
    var self = this;

    io.on('connection', function(socket){
        console.log("Socket connection established \n");
        socket.on('image-data', function(data){
            var response = {};

            self.emit("update", data);

            data.imageData;
            
            io.emit(response);
        });
    });

    http.listen(port, function(){
        console.log('socket server listening on *:' + port);
    });

    this.socket = io
}

util.inherits(Connection, events.EventEmitter);

Connection.prototype.connect = function() {};

module.exports = Connection;