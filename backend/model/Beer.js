const Config = require('../config.js');
const Objection = Config.Objection;
const knex = Config.knex;
const Model = Config.Model;

/*const schemaPromise = knex.schema.createTableIfNotExists('Beer', table => {
	table.bigincrements('id').primary();
	table.string('packageType');
	table.decimal('volume');
	table.dateTime('drinked');
	table.string('comment');
	table.date('bbe');
	table.date('bottled');
	table.date('bought');
	table.string('boughtFrom');
	table.string('conditionComment');
	table.biginteger('beerTypeId').unsigned()
		.references('id')
		.inTable('BeerType');
	table.biginteger('userId').unsigned()
		.references('id')
		.inTable('User');


});

schemaPromise.then(() => {
	console.log('beer table added');
}).catch(e => {console.log(e)});	
*/

function Beer() {
	Model.apply(this, arguments);
}

Beer.tableName = 'Beer';
Model.extend(Beer);


module.exports = Beer;

