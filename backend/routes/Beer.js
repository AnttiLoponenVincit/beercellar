const Beer = require('../model/Beer.js');

module.exports = app => {

	app.get('/beers', (req, res, next) => {
		Beer
		.query()
		.then(beers => { res.send(beers);})
		.catch(next);
	});

	app.get('/beers/:beer_id', (req, res, next) => {
		Beer
		.query()
		.where('id', req.params.beer_id)
		.first()
		.then(beer => { res.send(beer);})
		.catch(next);

	});

	app.post('/beers', (req, res, next) => {
		Beer
		.query()
		.insert(req.body)
		.then(beer => { res.send(beer);})
		.catch(next);
	});

	app.patch('/beers/:beer_id', (req, res, next) => {
		Beer
		.query()
		.patchAndFetchById(req.params.beer_id, req.body)
		.then(beer => { res.send(beer);})
		.catch(next);
	});

	app.delete('/beers/:beer_id', (req, res, next) => {
		Beer
		.query()
		.delete()
		.where('id', req.params.beer_id)
		.then(() => {})
		.catch(next);
	});
};