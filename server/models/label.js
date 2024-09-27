import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";
import Product from "./product.js";

const Label = sequelize.define('Label', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  emoji: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id'
    }
  }
});


Label.belongsTo(User);
Label.hasMany(Product); 

export default Label;
