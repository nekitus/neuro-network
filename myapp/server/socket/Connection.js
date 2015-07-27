var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 4000;

function Connection(){
    io.on('connection', function(socket){

        socket.on('chat message', function(msg){
            console.log(msg);
            io.emit('chat message', "hello from server");
        });
    });

    http.listen(port, function(){
        console.log('socket server listening on *:' + port);
    });

    this.socket = io
}

Connection.prototype.connect = function() {};

module.exports = Connection;