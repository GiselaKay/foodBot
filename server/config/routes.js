// links to controllers
var matchController = require('../controllers/matchController.js');
var recipeController = require('../controllers/recipeController.js');
var userController = require('../controllers/userController.js');
var mealController = require('../controllers/mealController.js');

var helpers = require('./helpers.js');


module.exports = function(app, express) {
	
    // app.get('/foodBot/profile', userController.retrieveAllUsers); // Add AuthChecker
	app.post('/foodBot/auth/signup', userController.signup);
	app.post('/foodBot/auth/signin', userController.signin); // Add AuthChecker
	// app.get('/foodBot/auth/signedin', userController.signedin);

	// app.post('/foodBot/recipes/', recipeController.addMeal); // Add AuthChecker
	app.get('/foodBot/recipes/:id',  recipeController.retrieveSuggestedRecipes); // Add AuthChecker

	app.get('/foodBot/meals/:id', mealController.retrieveUserMeals); // Add AuthChecker
	app.post('/foodBot/meals/:id', mealController.addUserMeal); // Add AuthChecker

	app.get('/foodBot/match/:id', matchController.createMatch);
	// app.get('/foodBot/match/:id', matchController.)
	// app.get('/foodBot/users/home/:username', dashboardController.getUserProfile) // Add AuthChecker

};
