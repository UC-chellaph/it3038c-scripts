var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require('ip');

http.createServer(function(req, res){

    if (req.url === "/") {
        fs.readFile("./public/index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
}
    else if(req.url.match("/sysinfo")) {
        myHostName=os.hostname();
        String.prototype.toHHMMSS = function () {
            var sec_num = parseInt(this, 10);
            var hours   = Math.floor(sec_num / 3600);
            var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            var seconds = sec_num - (hours * 3600) - (minutes * 60);
            var days = 0;
            do{
                hours - 24;
                days + 1;
            }  
            while (hours>24);
        
            if (days < 10) {days = "0"+days;}
            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}
            var time    = 'Days: '+days+', Hours: '+hours+', Minutes: '+minutes+', Seconds:'+seconds;
            return time;
        }
            var time = process.uptime();
            var uptime = (time + "").toHHMMSS();

            var myMemoryBytes = os.totalmem;
            var myMemory = myMemoryBytes/1000000;
            var freeMemoryBytes = os.freemem;
            var freeMemory = freeMemoryBytes/1000000;
            var cpuCount = os.cpus().length;   

        html=`    
        <!DOCTYPE html>
        <html>
          <head>
            <title>Lab 6 System Information Page</title>
          </head>
          <body>
            <p>Hostname: ${myHostName}</p>
            <p>IP: ${ip.address()}</p>
            <p>Server Uptime: ${uptime}</p>
            <p>Total Memory: ${myMemory} MB</p>
            <p>Free Memory: ${freeMemory} MB</p>
            <p>Number of CPUs: ${cpuCount} CPUS</p>            
          </body>
        </html>` 
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end(`404 File Not Found at ${req.url}`);
    }
}).listen(3000);

console.log("Server listening on port 3000");
