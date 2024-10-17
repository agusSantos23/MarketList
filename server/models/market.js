import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.js";

const Market = sequelize.define('Market', {

  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      is:{
        args: [/^([0-9A-F]{3}|[0-9A-F]{6})$/i],
        msg: "The color must be a valid hexadecimal code (e.g., #fff or #ffffff)."
      }
    }
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    onDelete: 'CASCADE',
    references: {
      model: User,
      key: 'id',
    },
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




export default Market;
