const Config = require('../config.js');
const Objection = Config.Objection;
const knex = Config.knex;
const Model = Config.Model;

/*const schemaPromise = knex.schema.createTableIfNotExists('BeerType', table => {
	table.bigincrements('id').primary();
	table.string('name');
	table.string('style');
	table.decimal('abv');
	table.integer('monthsBeforeBbe');
});

schemaPromise.then(() => {
	console.log('beer type table added');
}).catch(e => {console.log(e)});	

*/

function BeerType() {
	Model.apply(this, arguments);
}

BeerType.tableName = 'BeerType';
Model.extend(BeerType);

module.exports = BeerType;