const BeerType = require('../model/BeerType.js');

module.exports = app => {

	app.get('/beer-types', (req, res, next) => {
		BeerType
		.query()
		.then(beerTypes => { res.send(beerTypes);})
		.catch(next);
	});

	app.get('/beer-types/:id', (req, res, next) => {
		BeerType
		.query()
		.where('id', req.params.id)
		.first()
		.then(beerType => { res.send(beerType);})
		.catch(next);

	});

	app.post('/beer-types', (req, res, next) => {
		BeerType
		.query()
		.insert(req.body)
		.then(beerType => { res.send(beerType);})
		.catch(next);
	});

	app.patch('/beer-types/:id', (req, res, next) => {
		BeerType
		.query()
		.patchAndFetchById(req.params.id, req.body)
		.then(beerType => { res.send(beerType);})
		.catch(next);
	});

	app.delete('/beer-types/:id', (req, res, next) => {
		BeerType
		.query()
		.delete()
		.where('id', req.params.id)
		.then(() => {})
		.catch(next);
	});
}