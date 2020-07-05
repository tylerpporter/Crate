 // creates a Test model for the Tests table in the Crate database

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  Test.associate = function(models) {
    Test.belongsTo(models.User)
  };
  return Test;
};
