function Neuron(name, matrix){
    this.name = name;
    this.weightMatrix = matrix;
}
Neuron.prototype = {
    calculate: function(){
        this.weightMatrix.forEach(function(line, x){
            line.forEach(function(item, y){
                item[x,y]
            })
        })
    },
    sigm: function() {
        var limit = 50; // Примерное значение - колличество клеток отдавших true в сетке
        var result = 1 / (1 + Math.pow(limit, some));

        return result > 0;
    },
    sizeControl: function(){

    }
};
