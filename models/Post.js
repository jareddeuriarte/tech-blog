const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'post',
  }
);

module.exports = Post;
