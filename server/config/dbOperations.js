module.exports = {

  //sql command for user table
  createUsersTable: 'CREATE TABLE IF NOT EXISTS Users' +
    '(' +
    'id SERIAL NOT NULL PRIMARY KEY,' +
    'password VARCHAR(255) NOT NULL,' +
    'email VARCHAR(25) NOT NULL' +
    ')',

  //sql command for user profile
  createRecipesTable: 'CREATE TABLE IF NOT EXISTS Recipes' +
    '(' +
    'id serial NOT NULL PRIMARY KEY, ' +
    'name varchar(255) NOT NULL,' +
    'ingredients varchar(50)[], ' +
    'directions varchar(255)[], ' +
    'directionsUrl varchar(255), ' +
    'exactCookingTime int, ' +
    'cookingTime int, ' +
    'region varchar(25), '+
    'cost int ,' +
    "image varchar(255) DEFAULT 'http://lh4.ggpht.com/iEyogFzb2gMbVBLSjgPL0qSETW76pRG1hQYRjLOnmU4JDgMdc65v53OZ3WWSvuRO_kY'," +
    'complexity int,' +
    'recipesourceid varchar(255) UNIQUE,' +
    'sourceid int references RecipeSources(id) NOT NULL,' +
    'rating int' +
    ')',

  //sql command for recipe profile
  createProfilesTable: 'CREATE TABLE IF NOT EXISTS Profiles' +
    '('+
     'id int references Users(id) NOT NULL PRIMARY KEY,' +
     'name varchar(20), ' +
     'budget int,' +
     'diet varchar(50), ' +
     'allergies varchar(50), ' +
     'match int,' + 
     'cookingTime int,' +
     'foodie bool' +
     ')',

  //sql command for recipe profile join table
  createUserRecipesTable: 'CREATE TABLE IF NOT EXISTS UserRecipes' +
    '('+
     'profileid int references Profiles(id) NOT NULL,' +
     'recipeid int references Recipes(id) NOT NULL,' +
     'created bool DEFAULT FALSE,' +
     'liked bool NOT NULL' +
     ')',

  // sql command for match join table
  createMatchesQueueTable: 'CREATE TABLE IF NOT EXISTS MatchesQueue' +
    '('+
     'userOne int references Profiles(id) NOT NULL'+
     ')',
  
  createRecipeSourcesTable: 'CREATE TABLE IF NOT EXISTS RecipeSources' +
    '(' +
      'id SERIAL NOT NULL PRIMARY KEY,' + 
      'name varchar(50)' +
    ')',

  createIngredientsTable: 'CREATE TABLE IF NOT EXISTS Ingredients' +
    '(' +
      'id SERIAL NOT NULL PRIMARY KEY, ' +
      'name varchar(255)' +
    ')'
}

