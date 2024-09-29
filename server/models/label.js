import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

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
},{
  freezeTableName: true
});

export default Label;
