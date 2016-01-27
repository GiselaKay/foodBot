module.exports = {
  //sql command for user table
  createUsersTable: 'CREATE TABLE IF NOT EXISTS Users' + 
    '(' +
    'id SERIAL NOT NULL PRIMARY KEY,' +
    'password VARCHAR(20) NOT NULL,' +
    'email VARCHAR(20) NOT NULL' +
    ')',
  //sql command for user profile
  createRecipesTable: 'CREATE TABLE IF NOT EXISTS Recipes' +
    '(' +
    'id serial NOT NULL PRIMARY KEY, ' +
    'name varchar(20),' + 
    'ingredients varchar(50)[], ' +
    'directions varchar(255)[], ' +
    'cookingTime int, ' +
    'region varchar(25), '+
    'cost int ' +
    ')',
  //sql command for recipe profile
  createProfilesTable: 'CREATE TABLE IF NOT EXISTS Profiles' +
    '('+
     'id int references Users(id) PRIMARY KEY,' +
     'name varchar(20), ' +
     'restrictions varchar(50)[], ' +
     'allergies varchar(50)[], ' +
     'match varchar(50)' + 
     ')',
  //sql command for recipe profile join table
  createUserRecipesTable: 'CREATE TABLE IF NOT EXISTS UserRecipes' +
    '('+
     'profileid int references Profiles(id),' +
     'recipeid int references Recipes(id), ' +
     'created bool' +
     ')',
  // sql command for match join table
  createMatchesTable: 'CREATE TABLE IF NOT EXISTS Matches' +
    '('+
     'userOne int references Profiles(id),' +
     'userTwo int references Profiles(id) ' +
     ')'

}

