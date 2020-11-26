const mongoose = require('mongoose');

/* connect database */
const dbURL = process.env.DATABASE_URL;
if (dbURL) {
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} else {
  console.error('[Goose API] Environment variable DATABASE_URL not set');
}

/* compile models */
const Website = require('../models/Website')(mongoose);

module.exports = {
  // mongoose instance middleware
  mongoose: () => async (req, res, next) => {
    req.mongoose = mongoose; // inject mongoose instance and models to req
    next();
  },
  // models
  Website,
};