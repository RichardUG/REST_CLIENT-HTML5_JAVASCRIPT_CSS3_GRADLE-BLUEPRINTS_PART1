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

    var _funcDraw = function (vari) {
        if (vari) {
            var lastx = null;
            var lasty = null;
            var actx = null;
            var acty = null;
            var myCanvas = document.getElementById("myCanvas");
            var ctx = myCanvas.getContext("2d");
            ctx.fillStyle = "white";
            console.log(myCanvas.width)
            ctx.fillRect(0, 0, myCanvas.width , myCanvas.height);
            ctx.beginPath();

            vari.points.map(function (prue){
                if (lastx == null) {
                    lastx = prue.x;
                    lasty = prue.y;
                } else {
                    actx = prue.x;
                    acty = prue.y;
                    ctx.moveTo(lastx, lasty);
                    ctx.lineTo(actx, acty);
                    ctx.stroke();
                    lastx = actx;
                    lasty = acty;
                }
            });
        }
    }

    return {
            plansAuthor: function () {
                author = document.getElementById("autor").value;
                apimock.getBlueprintsByAuthor(author,_funcModify);

            },
            drawPlan: function(name) {
                author = document.getElementById("autor").value;
                obra = name;
                apimock.getBlueprintsByNameAndAuthor(author,obra,_funcDraw);
            }
        };
})();

window.onload = function(){
  var myCanvas = document.getElementById("myCanvas");
  var ctx = myCanvas.getContext("2d");
  ctx.fillStyle = "white";
  console.log(myCanvas.width)
  ctx.fillRect(0, 0, myCanvas.width , myCanvas.height);
};