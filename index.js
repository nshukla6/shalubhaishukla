var express=require('express');
var app=express();

app.get('/',function(request,response){
  response.sendFile(__dirname+'/para3col.html');
});
app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});
