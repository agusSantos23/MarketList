import { DataTypes} from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User',{

  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.STRING,
    allowNull:false
  },
  createdAt:{
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull:false,
  }
},{
  freezeTableName: true,
  timestamps: false
})

export default User;