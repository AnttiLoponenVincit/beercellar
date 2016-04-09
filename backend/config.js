const Knex = require('knex');
const Objection = require('objection');
const Model = Objection.Model;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

// Error handling.
app.use(function (err, req, res, next) {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

const knex = Knex({
	client: 'pg', 
	connection: {
	    user: 'beercellar',
	    password: 'beercellar',
	    host: 'localhost',
	    database: 'beercellar',
		}
	}
);

Model.knex(knex);

module.exports = {
	knex: knex,
	Objection: Objection,
	Model: Model,
	app: app
}