const express = require('express'),
      app = express(),
      port = process.env.PORT || 3001,
      mongoose = require('mongoose'),
      Recipient = require('./api/models/recipientsModel'),
      bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/recipientsRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Recipients RESTful API server started on: ' + port);
