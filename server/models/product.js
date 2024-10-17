import { DataTypes } from "sequelize"
import sequelize from "../config/db.js"

import Label from "./label.js"
import Market from "./market.js"

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
    onDelete: 'CASCADE',
    references: {
      model: Market,
      key: 'id'
    }
  },
  labelId: {
    type: DataTypes.UUID,
    onDelete: 'CASCADE',
    references: {
      model: Label,
      key: 'id'
    }
  }
},{
  freezeTableName: true
})

Product.belongsTo(Label, {
  foreignKey: 'labelId',
  as: 'label'
})

Product.belongsTo(Market, {
  foreignKey: 'marketId',
  as: 'market'
})

export default Product