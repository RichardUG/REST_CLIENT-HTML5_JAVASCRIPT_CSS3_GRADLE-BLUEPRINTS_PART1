app= (function (){
    var _funcModify = function (variable) {
        if(variable != null){
            var arreglo = variable.map(function(blueprint){
                return {key:blueprint.name, value:blueprint.points.length}
            })
            $("#tabla tbody").empty();

            arreglo.map(function(blueprint){
                var temporal = '<tr><td id="nombreActor">'+blueprint.key+'</td><td id="puntos">'+blueprint.value+'</td><td type="button" onclick="app.drawPlan(\''+blueprint.key+'\')">Open</td></tr>';
                $("#tabla tbody").append(temporal);
            })

            var valorTotal = arreglo.reduce(function(valorAnterior, valorActual, indice, vector){
                                        return valorAnterior + valorActual.value;
                                     },0);

            document.getElementById("autorLabel").innerHTML = author;
            document.getElementById("puntosLabel").innerHTML = valorTotal;
        }
    };

    return {
            plansAuthor: function () {
                author = document.getElementById("autor").value;
                apimock.getBlueprintsByAuthor(author,_funcModify);

            },
        };
})();