// Import Express.js JavaScript module into the application
// and creates its variable.
var express = require('express');
var app = express();
var body_parser=require('body-parser')
app.use(body_parser.json({extended:false}))

// Creates a server which runs on port 3000 and
// can be accessed through localhost:3000

// Function callName() is executed whenever
// the URL is of the form localhost:3000/name
app.post('/name', callName);

function callName(req, res) {

    // Use child_process.spawn method from
    // child_process module and assign it
    // to variable spawn
    var spawn = require("child_process").spawn;

    // Parameters passed in spawn -
    // 1. type_of_script
    // 2. List containing P ath of the script
    //    and arguments for the script

    // E.g.: http://localhost:3000/name?firstname=Mike&lastname=Will
    // So, first name = Mike and last name = Will
    console.log(req.body.temp_max)
    console.log(req.body.temp_min)
    var process = spawn('python',["./hackinit.py",
                          req.body.temp_max,
                           req.body.temp_min] );

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        console.log(data.toString())
        res.json({finalData:data.toString()});
    } )


// var spawn = require('child_process').spawn,
// py    = spawn('python', ['./newPython.py']),
// data = [1,2,3,4,5,6,7,8,9],
// dataString = '';

// py.stdout.on('data', function(data){
// dataString += data.toString();
// res.send(data.toString())
// });
// py.stdout.on('end', function(){
// console.log('Sum of numbers=',dataString);
// });
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();

    
}
app.listen(3000, function() {
    console.log('server running on port 3000');
} )


// Save code as start.js