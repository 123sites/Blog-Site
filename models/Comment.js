const { Model, DataTypes } = require("sequelize");
const sequelize = require(".././config/connection");

class Comment extends Model {}

Comment.init({
    body: {
        type:DataTypes.TEXT,
        allowNull:false
    },
    date: {
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
},{
    // Pass in the imported sequelize connection.
    sequelize,
    // Don't automatically create timestamp fields
    timestamps: false,
    // Don't pluralize name of database table.
    freezeTableName: true,
    // Use underscores instead of camel-casing.
    underscored: true,
    // Make it so our model name stays in lowercase in the database.
    modelName: 'comment',
  }
);

module.exports = Comment;
