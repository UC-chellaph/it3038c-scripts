var http = require("http");
var data = require("C:/Users/Prateek/Desktop/University Of Cincinnati/Junior Year/Spring 2021/IT3038C - Scripting Languages with AJ Bothe/Lab 9/widgets.json");

var server = http.createServer(function(req, res){
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if (req.url === "/blue") {
        listBlue(res);
    }
else {
        res.writeHead(404, {"Content-Type": "text/plain"});      
        res.end("Data not found");        
    }
});

server.listen(3000);
console.log("Server is listening on port 3000");

function listBlue(res) {
    var colorBlue = data.filter(function(item) {
        return item.color === "blue";
    });

    res.end(JSON.stringify(colorBlue));
}

function listRed(res) {
    var colorRed = data.filter(function(item) {
        return item.color === "red";
    });

    res.end(JSON.stringify(colorRed));
}
