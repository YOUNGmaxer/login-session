const users = require('../data/users').users;

const validateUser = (name, password) => {
  return users.find(user => {
    return user.name === name && user.password === password;
  });
};

module.exports = {
  validateUser
};