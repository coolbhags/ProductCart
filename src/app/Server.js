    
//import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
//import { connect } from 'http2';

var mongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

const url = 'mongodb://localhost:27017';


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin , X-Requested-Width , Content-Type , Accept");
    next();
})

app.get('/', function (req, res) {
    res.send("Welcome to student database");
})

app.get('/showMobiles', function (req, res) {
    mongoClient.connect(url, function (err, client) {
        if (err) {
            console.log("Error occurred connecting to database");
        }
        else {
            console.log("Connected to database");

            var db = client.db('mobiles');
            db.collection("mobileList").find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                  console.log(result);
                    res.json(result);
                    console.log(result);
                }
            });
            client.close();
        }
    })
})

app.listen(3000, () => console.log("Server Listening on port 3000"));

