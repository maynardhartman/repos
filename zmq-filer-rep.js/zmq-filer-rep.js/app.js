'use strict';

const
    fs = require('fs'),
    zmq = require('zmq'),

    // socket to reply to client reequests
    responder = zmq.socket('rep');

    // handle incomming requests
responder.on('message', function (data) {
    let request = JSON.parse(data);
    console.log('Received request to get: ' + request.path);

    // Read file and reply with content
    fs.readFile(request.path, function (err, content) {
        console.log('Sending response contest ');
        responder.send(JSON.stringify({
            content: content.toString(),
            timestamp: Date.Now(),
            pid: process.pid
        }));
    });
});

// listen on TCP port 5433
responder.bind('TCP://127.0.0.1:5433', function (err) {
    console.log('Listening for zmq requestrers...');
});

// Close the reaponder when the Node process ends
process.on('SIGINT', function () {
    console.log('Shutting down...');
    responder.close();

});