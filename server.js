// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req, res) => {
  let seen = [];
  /*res.json(
    JSON.parse(
      JSON.stringify(
        req,
        (k, v) => {
          if (v != null && typeof v === "object") {
            if (seen.indexOf(v) >= 0) {
              return;
            }
            seen.push(v);
          }
          return v;
        },
        2
      )
    )
  );*/
  let lang = req.get("Accept-Language").split(",");
  res.json({
    ipaddress: req.ip,
    software: req.get("User-Agent"),
    language: ${lang[0]},${lang[1]},
  });
});


// listen for requests : )
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
