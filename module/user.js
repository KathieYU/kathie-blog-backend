const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection.js');

class User extends Model {}

User.init({
  // 在这里定义模型属性
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  user_pass: {
    type: DataTypes.STRING(30),
    allowNull: false
    // allowNull 默认为 true
  }
}, {
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  modelName: 'User', // 我们需要选择模型名称
  freezeTableName: true, // 停止执行表名自动复数化
  timestamps: false
});

// 定义的模型是类本身
console.log(User === sequelize.models.User); // true

module.exports = User;