var express = require('express');
var path = require('path');
var morgan = require('morgan');
var app = express();
var httpServer = require('http').Server(app);
var port = process.env.PORT || 8000;

app.use(morgan("dev"));
app.use(express.static(__dirname));
app.use("/ang2", express.static("node_modules/angular2/bundles/"));
app.use("/sysjs", express.static("node_modules/systemjs/dist/"));
app.use("/rxjs", express.static("node_modules/rxjs/bundles/"));
app.use("/es6", express.static("node_modules/es6-shim/"));
app.use("/ts", express.static("node_modules/typescript/lib/"));




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/views/index.html"));
});

httpServer.listen(port, function () {
	console.log("Serwer działa na porcie " + port);
});


