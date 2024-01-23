module.exports = function (sequelize, DataTypes) {
  const PageTracking = sequelize.define('PageTracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
    },
    fingerprintId: {
      type: DataTypes.INTEGER,
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
    },
    localeSeoSlugId: {
      type: DataTypes.INTEGER,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isRobot: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latencyMS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('createdAt')
          ? this.getDataValue('createdAt').toISOString().split('T')[0]
          : null
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return this.getDataValue('updatedAt')
          ? this.getDataValue('updatedAt').toISOString().split('T')[0]
          : null
      }
    }
  }, {
    sequelize,
    tableName: 'page_trackings',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  PageTracking.associate = function (models) {

  }

  return PageTracking
}