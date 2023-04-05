const { Model, DataTypes } = require("sequelize");
const sequelize = require(".././config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blog",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comment",
  }
);
console.log(Comment.init);

module.exports = Comment;

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     comment_description: {
//       type: DataTypes.STRING,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     blog_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'blog',
//         key: 'id',
//       },
//     },
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
//     modelName: 'comment',
//   }
// );
// module.exports = Comment;

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     comment_description: {
//       type: DataTypes.STRING,
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//     blog_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'blog',
//         key: 'id',
//       },
//     },
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
//     modelName: 'comment',
//   }
// );
// module.exports = Comment;

// ////////////////////

// Comment.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate:{
//       len: [1],
//       }
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'post',
//         key: 'id',
//       },
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     // Pass in the imported sequelize connection.
//     sequelize,
//     // Don't automatically create timestamp fields
//     timestamps: false,
//     // Don't pluralize name of database table.
//     freezeTableName: true,
//     // Use underscores instead of camel-casing.
//     underscored: true,
//     // Make it so our model name stays in lowercase in the database.
//     modelName: "comment",
//   }
// );

// module.exports = Comment;
