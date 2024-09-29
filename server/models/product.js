import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define('Product',{

  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  price:{
    type: DataTypes.FLOAT,
    allowNull: true,
    validate: {
      isFloat: true,
      min: 0
    }
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate:{
      isInt: true,
      min: 0
    }
  },


  marketId: {
    type: DataTypes.UUID,
    references: {
      model: Market,
      key: 'id'
    }
  },
  labelId: {
    type: DataTypes.UUID,
    references: {
      model: Label,
      key: 'id'
    }
  }
},{
  freezeTableName: true
})

export default Product