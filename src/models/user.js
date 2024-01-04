const { Sequelize, Model, DataTypes } = require("sequelize");
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

// Definir la relación entre Usuario y Película
User.associate = (models) => {
  User.hasMany(models.Movie, {
    as: "movies",
    onDelete: "CASCADE",
    hooks: true,
  });
};

module.exports = User;
