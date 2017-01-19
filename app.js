var express = require('express');
var path = require('path');
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var jsonData;

// Define the port to run on
app.set('port', 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

fs.readFile('api/list.json', handleFile)

// Write the callback function
function handleFile(err, data) {
  if (err) throw err
  jsonData = JSON.parse(data)
}


app.get('/', function (req, res) {
  res.redirect("/index.htm")
});
app.get('/:filename', function (req, res) {
  console.log("in file")

  if (req.params.filename != null && req.params.filename.length >= 0) {
    console.log("file")
    res.sendfile(req.params.filename, { root: __dirname })
  }
  console.log("no file")

  res.sendfile("index.htm", { root: __dirname })

});

app.get('/schedule/list', function (req, res) {
  var jsonContent = "";
  if (req.query.fail != null && req.query.fail.length >= 0) {
    res.status(503)
    jsonContent = JSON.parse('{ "message" : "Service currently unavailable." }');
  }
  else jsonContent = jsonData;
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonContent);
});

app.post('/schedule/star/:sessionId', function (req, res) {
  var sessionId = req.params.sessionId;
  var count;
  for (var i in jsonData.schedule)
    if (sessionId == jsonData.schedule[i].id)
      count = jsonData.schedule[i].starCount

  jsonContent = JSON.parse('{ "starCount": ' + count + ' }');
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonContent);
});
function isValFun(input) {
  return input == null || input == "";
}
function addTextToString(input) {
  return "<br>The " + input + " field is required"
}
app.post('/registration/new', function (req, res) {
  var isVal = true;
  var html = "<h1>Invalid registration information</h1>"
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var EmailAddress = req.body.EmailAddress;
  var Password = req.body.Password;
  var ConfirmPassword = req.body.ConfirmPassword;

  if (isValFun(FirstName)) {
    html += addTextToString("FirstName");
  }
  if (isValFun(LastName)) {
    html += addTextToString("LastName");
  }
  if (isValFun(EmailAddress)) {
    html += addTextToString("EmailAddress");
  }
  if (isValFun(Password)) {
    html += addTextToString("Password");
  }
  if (isValFun(ConfirmPassword)) {
    html += addTextToString("ConfirmPassword");
  }
 
  if (isVal) {
    res.send(html)
  } else
    res.sendfile("registered.htm", { root: __dirname })
});


// Listen for requests
var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
