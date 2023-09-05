// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Movie = require('./models/movie')
const Actor = require('./models/Actor')