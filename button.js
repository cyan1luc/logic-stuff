var input;
var http = require('http'),
    express = require('express'),
    fs = require('fs'),
    jsonApp;
var compute = require('./compute');
// import compute from './compute.js';

jsonApp = express();
http.createServer(jsonApp).listen(3030);

jsonApp.use(express.static(__dirname));

function add(){
    var input = document.getElementById("add").value;
    document.getElementById("sample").innerHTML = input;
    var inputJSON = JSON.stringify(input);
    fs.writeFile('transaction.json', inputJSON, function(err){
        if(err) throw err;
        console.log('Saved!');
    });
}


