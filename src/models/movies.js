const {  Model, DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize")





class Movie extends Model {}

Movie.init(
  {
   Movie_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    moviename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    sequelize,
    modelName: "Movie",
  }
);
sequelize.sync().then(()=>{
    console.log("Movie creada");
}).catch((error)=>{
    console.error("LA tabla no se ha creado:", error)
})
module.exports = Movie;