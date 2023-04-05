// Import all models.
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.
// It refers to the PRIMARY KEY in another table.
// The table with the foreign key is called the child table, and the table with the primary key
// is called the referenced or parent table.
// https://www.w3schools.com/sql/sql_foreignkey.asp

// Sequelize Associations: https://sequelize.org/docs/v6/core-concepts/assocs/

// User.hasMany(Blog, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Blog.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Comment.belongsTo(User, {
//   foreignKey: "user_id",
// });
// Comment.belongsTo(Blog, {
//   foreignKey: "blog_id",
// });

// Blog.hasMany(Comment, {
//   foreignKey: "blog_id",
// });
// User.hasMany(Comment, {
//   foreignKey: "user_id",
// });



// module.exports = { User, Blog, Comment };

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});


// // Comment to it belongs to the User.
// // When delete, comment by that user is gone.
// Comment.belongsTo(User, {
//   foreignKey: 'user_id',
//   // See 28 STU PROJECT: Models & index.js.
//   // onDelete: 'CASCADE',
//   // onDelete: 'SET NULL',
// });

// // Comment belongs (is attached) to the post.
// // When delete, post by that user is gone.
// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   // See 28 STU PROJECT: Models & index.js.
//   // onDelete: 'CASCADE',
//   // onDelete: 'SET NULL',
// });

// // The User can have many comments.
// // When delete, comment by that user is gone.
// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   // See 28 STU PROJECT: Models & index.js.
//   // onDelete: 'CASCADE',
//   // onDelete: 'SET NULL',
// });

// // They can post many comments on to the post.
// Post.hasMany(Comment, {
//   foreignKey: 'post_id'
// });

module.exports = { User, Blog, Comment };
