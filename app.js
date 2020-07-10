// Import Express and set up the app
const express = require('express');
const app = express();



//Handles all routes

const routes = require('./routes.js');
app.use(routes);


/*
* 404 and Global Error Handlers
*/

const handleErrors = require('./errorhandler.js');
app.use(handleErrors.globalError);
app.use(handleErrors.handleErrors);

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
})