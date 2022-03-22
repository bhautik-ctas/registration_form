const route = require('express').Router();
const api = require('../controller/firstController.js');
const middleware = require('../middleware/middleware.js')

//  public route
route.post('/create', api.registrationData)
route.post('/login', api.loginData)
route.put('/update/:id', middleware, api.changePassword)


//  private route

module.exports = route;
