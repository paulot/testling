
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var data = null;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname, 'index.html');
});

app.get('/data',function(req,res){
  res.end(data);
});
app.post('/',function(req,res){
  data = req.body.data;
  // console.log(data);
  res.end("yes");
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
