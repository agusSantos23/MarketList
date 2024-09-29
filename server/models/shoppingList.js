import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

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
},{
  freezeTableName: true
})

export default ShoppingList;

