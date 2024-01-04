const { Sequelize } = require("sequelize")
require ("dotenv").config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3306,
  });
  sequelize.authenticate()
    .then(() => {
      console.log('Conexión establecida correctamente.');
    })
    .catch((error) => {
      console.error('Error al conectar con la base de datos:', error);
    });

    module.exports = sequelize