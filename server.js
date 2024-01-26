import express from "express";
import http from "http";
import url from "url";
import request from "request";

const app = express();
const port = 3000;

// HTTP API Access
var request = require('request');

var options = {
    proxy: 'http://dz5bgkpot6vs7f:edymozx5jpa4uypp02kova71n@us-east-static-04.quotaguard.com:9293',
    url: 'https://api.github.com/repos/joyent/node',
    headers: {
        'User-Agent': 'node.js'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
 
// Express Server
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
