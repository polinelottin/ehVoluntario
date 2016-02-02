// server.js

    // set up ========================
    var express  = require('express');
    var nodemailer = require('nodemailer');
    var app      = express();                               // create our app w/ express
    var bodyParser = require('body-parser');
    
    // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");

    app.post('/sendMail', function(req, res) { 
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'contatoehvoluntario@gmail.com',
                pass: 'voluntario@2015'
            }
        });

        transport.sendMail({
            from: 'Eh Voluntário <contatoehvoluntario@gmail.com>',
            to: 'contatoehvoluntario@gmail.com',
            subject: 'Mais um Voluntário',
            html: 'teste',
            text: 'olaaaaaaaaaaaaaaaa primeiro voluntario'
            }, 
            function(err, responseStatus) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(responseStatus.message);
                }
            }
        );
    });
