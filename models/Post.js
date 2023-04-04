const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Post Model.
class Post extends Model {}

// Creates the fields for Post Model.
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Pass in the imported sequelize connection.
    sequelize,
    // Don't pluralize name of database table.
    freezeTableName: true,
    // Use underscores instead of camel-casing.
    underscored: true,
    // Make it so our model name stays in lowercase in the database.
    modelName: "post",
  }
);

module.exports = Post;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Post extends Model {}

// Post.init(
//   {
//     // Identifies them on the post.
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // Gives a title for the post.
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           // len is a number. The length of the string.
//             len: [1]
//         }
//     },
//     // Post the content of what they wrote.
//     content: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//           len: [1]
//       }
//   },
//   // Varifies who the user is by login information.
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'post',
//   }
// );

// module.exports = Post;
