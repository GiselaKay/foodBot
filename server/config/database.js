module.exports = {

	createUserTable: 'CREATE TABLE IF NOT EXISTS Users ' + 
				'(' +
				'id SERIAL NOT NULL PRIMARY KEY,' +
				'password VARCHAR(20) NOT NULL,' +
				'email VARCHAR(20) NOT NULL' +
				')',

	createRecipeTable: 'CREATE TABLE IF NOT EXISTS Recipe' +
				'(' +
				'id serial NOT NULL PRIMARY KEY,' +
				 'name varchar(20),' +
				 'ingredients varchar(50)[],' +
				 'directions varchar(255)[],' +
				 'cookingTime int,' +
				 'region varchar(25),' +
				 'cost int' +
				 ')',

	createProfileTable: 'CREATE TABLE IF NOT EXISTS Profile' +
				'('+
				 'id serial NOT NULL PRIMARY KEY,' +
				 'name varchar(20), ' +
				 'restrictions varchar(50)[],' +
				 'allergies varchar(50)[]' +
				 ')'
}


