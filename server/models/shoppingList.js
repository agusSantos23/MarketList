import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";
import Product from "./product.js";
import ShoppingListProducts from "./shoppingListProducts.js";


const ShoppingList = sequelize.define('ShoppingList', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },


  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  timerDuration: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  }
})

ShoppingList.belongsTo(User); 
ShoppingList.hasMany(ShoppingListProducts);

export default ShoppingList;

