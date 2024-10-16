import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";

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
    allowNull: true,
    defaultValue: '🍎'
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  }
},{
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['userId', 'name'], 
    },
  ],
})


Label.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
})

export default Label;
