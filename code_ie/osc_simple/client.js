var osc = require('node-osc');

var oscServer = new osc.Server(8888, '0.0.0.0');
oscServer.on("message", function(msg, rinfo) {
    console.log("OSC message:");
    console.log(msg);
});