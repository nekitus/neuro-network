function Connection(){

    var socket = io("localhost:4000");
    socket.emit('chat message', "hello form client");

    socket.on('chat message', function(msg){
        console.log(msg)
    });
}

module.exports = Connection;