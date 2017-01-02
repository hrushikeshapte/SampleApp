var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index');

var port = process.env.PORT || 8080;

var app = express();

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static( __dirname+"/public"));

app.use('/',routes);

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
