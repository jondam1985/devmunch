const User = require('./User');
const Project = require('./Project');
const Achievement = require('./Achievement');
const Badge = require('./Badge');

/**
 * databse Model object containing all the collection schemas
 */
const Model = {
  User,
  Project,
  Achievement,
  Badge
}

module.exports = Model;

