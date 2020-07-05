// migration to add userId column and foreign key to the Tests table in the Crate database

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Tests', 'userId', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'users'
            },
            key: 'id'
          }
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Tests', 'userId', { transaction: t })
      ]);
    });
  }
};
