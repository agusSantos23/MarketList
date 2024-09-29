import User from './user.js';
import Market from './market.js';
import Product from './product.js';
import Label from './label.js'; 
import ShoppingList from './shoppingList.js';
import ShoppingListProduct from './shoppingListProduct.js'; 


User.hasOne(ShoppingList, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

ShoppingList.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Market, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Market.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Market.hasMany(Product, {
  foreignKey: 'marketId',
  onDelete: 'CASCADE'
});

Product.belongsTo(Market, {
  foreignKey: 'marketId',
  onDelete: 'CASCADE'
});

User.hasMany(Label, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Label.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Product.belongsTo(Label, {
  foreignKey: 'labelId',
  onDelete: 'SET NULL'
});

ShoppingList.hasMany(ShoppingListProduct, {
  foreignKey: 'shoppingListId',
  onDelete: 'CASCADE'
});

ShoppingListProduct.belongsTo(ShoppingList, {
  foreignKey: 'shoppingListId',
  onDelete: 'CASCADE'
});

ShoppingListProduct.belongsTo(Product, {
  foreignKey: 'productId',
  onDelete: 'CASCADE'
});

Product.hasMany(ShoppingListProduct, {
  foreignKey: 'productId',
  onDelete: 'CASCADE'
});

export { User, Market, Product, Label, ShoppingList, ShoppingListProduct };
