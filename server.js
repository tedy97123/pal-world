import express from "express";
import http from "http";
import url from "url";
import request from "request";

const app = express();
const port = 3000;

// HTTP API Access
var HttpsProxyAgent = require('https-proxy-agent');
var request = require('request');
var proxy = "http://dz5bgkpot6vs7f:edymozx5jpa4uypp02kova71n@us-east-static-04.quotaguard.com:9293";
var agent = new HttpsProxyAgent(proxy);
request({
	uri: "https://example.com/api",
	method: "POST",
	headers: {
		'content-type': 'application/x-www-form-urlencoded'
	},
	agent: agent,
	timeout: 10000,
	followRedirect: true,
	maxRedirects: 10,
	body: "name=john"
}, function(error, response, body) {
	console.log("Error" + error);
	console.log("Response: " + response);
	console.log("Body: " + body);
});

 
// Express Server
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
