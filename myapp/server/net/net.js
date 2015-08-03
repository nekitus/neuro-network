/*
    Network startup file.
    Server require and run in in app.js
*/

var Connection = require('../socket/Connection.js');
//var neurons = './../neurons.json';
var neurons = require('./../neurons.json');
//var jsonfile = require('jsonfile');


function Net (){

    // Socket connection
    var connection = new Connection();
    connection.connect();

    // init neurons
    this.initNeurons();

}

Net.prototype = {

    initialize: function() {

    },

    getData: function(){
        return dat
    },

    initNeurons: function(){

        var symbols = neurons.symbols;

        symbols.forEach(function(symbol){
            symbol.name
        });

        //console.log(map.toLocaleString());
        //jsonfile.readFile(neurons, function(err, obj) {
        //    console.log('sdf')
        //    console.log(obj)
        //})


        //console.log("data");
        //console.log(data);

    }

};

module.exports = Net;
