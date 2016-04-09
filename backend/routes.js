const app = require('./config.js').app;
const Beer = require('./routes/Beer.js');
const BeerType = require('./routes/BeerType.js');
const User = require('./routes/User.js');

module.exports = app => {
	BeerType(app);
	User(app);
	Beer(app);
};

