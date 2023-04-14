// The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.
// It refers to the PRIMARY KEY in another table.
// The table with the foreign key is called the child table, and the table with the primary key
// is called the referenced or parent table.
// https://www.w3schools.com/sql/sql_foreignkey.asp

// Sequelize Associations: https://sequelize.org/docs/v6/core-concepts/assocs/

// Import all models.
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Blog, Comment };