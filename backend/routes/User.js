const User = require('../model/User.js');

module.exports = app => {

	app.get('/users', (req, res, next) => {
		User
		.query()
		.then(users => { res.send(users);})
		.catch(next);
	});

	app.get('/users/:user_id', (req, res, next) => {
		User
		.query()
		.where('id', req.params.user_id)
		.first()
		.then(user => { res.send(user);})
		.catch(next);

	});

	app.post('/users', (req, res, next) => {
		User
		.query()
		.insert(req.body)
		.then(user => { res.send(user);})
		.catch(next);
	});

	app.patch('/users/:user_id', (req, res, next) => {
		User
		.query()
		.patchAndFetchById(req.params.user_id, req.body)
		.then(user => { res.send(user);})
		.catch(next);
	});

	app.delete('/users/:user_id', (req, res, next) => {
		User
		.query()
		.delete()
		.where('id', req.params.user_id)
		.then(() => {})
		.catch(next);
	});
};