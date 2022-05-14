'use strict';

import {  QueryInterface, DataTypes } from "sequelize";
const tableName = "note";
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable(tableName, {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable(tableName);
  }
};

