var apiclient=(function () {
    var url='http://localhost:8080/blueprints';
    function drawPlan(name,obra){
        console.log($.get(url+"/"+name+"/"+obra));
        $.get(url+"/"+name+"/"+obra).then(responseJSON=>{
            console.log(responseJSON);
            mockdata=responseJSON;
        })
        console.log(mockdata);
    }
    return{
        getBlueprintsByAuthor:function(name, callback) {
            $.get(url+"/"+name).then(responseJSON=>{
                callback(
                   responseJSON
                )
            })
        },
        getBlueprintsByNameAndAuthor:function(autor,obra,callback){
            $.get(url+"/"+autor+"/"+obra).then(responseJSON=>{
                callback(
                    responseJSON
                )
            })
        }
    }
})();