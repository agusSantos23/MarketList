import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ShoppingListProducts = sequelize.define('ShoppingListProducts', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  marked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, 
  },

  shoppingListId: {
    type: DataTypes.UUID,
    references: {
      model: ShoppingList,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.UUID,
    references: {
      model: Product,
      key: 'id'
    }
  }
});

ShoppingListProducts.belongsTo(ShoppingList); 
ShoppingListProducts.belongsTo(Product);

export default ShoppingListProducts;
