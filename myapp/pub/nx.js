(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Connection(){

    var socket = io("localhost:4000");
    socket.emit('chat message', "hello form client");

    socket.on('chat message', function(msg){
        console.log(msg)
    });
}

module.exports = Connection;
},{}],2:[function(require,module,exports){
var Connection = require("./Connection");

function App(){
    $(function(){

        var connection = new Connection();


        // Аяксовый запрос к серверу
        //$.post("http://localhost:3000/some", function(data){
        //    setTimeout(function(){
        //        console.log("successed request", this.bla)
        //
        //    }.bind(data), 1)
        //})
    });

}
    


},{"./Connection":1}]},{},[2]);