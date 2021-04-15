const User = require('./User');
const Post = require('./Post');

// User.belongsTo(Post, {
//   foreignKey: 'username',
// });

module.exports = { User, Post };
