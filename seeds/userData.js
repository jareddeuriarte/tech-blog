const { User } = require('../models');

const userData = [
  {
    username: 'jareddeuri',
    password: 'banana',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
