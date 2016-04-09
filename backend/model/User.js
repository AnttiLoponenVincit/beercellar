const Config = require('../config.js');
const Objection = Config.Objection;
const knex = Config.knex;
const Model = Config.Model;

/*const schemaPromise = knex.schema.createTableIfNotExists('User', table => {
	table.bigincrements('id').primary();
	table.string('first_name');
	table.string('last_name');
	table.string('username');
	table.string('password');
	
});

schemaPromise.then(() => {
	console.log('user table added');
});	
*/
function User() {
	Model.apply(this, arguments);
}

User.tableName = 'User';
Model.extend(User);


module.exports = User;