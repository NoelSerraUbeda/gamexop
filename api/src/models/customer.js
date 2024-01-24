module.exports = function (sequelize, DataTypes) {
    const Customer = sequelize.define('Customer', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dialCodeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
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
      tableName: 'customers',
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
        },
        {
          name: 'customers_email_index',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'email' },
          ]
        },
        {
          name: 'customers_countryId_fk',
          using: 'BTREE',
          fields: [
            { name: 'countryId' },
          ]
        },
        {
          name: 'customers_cityId_fk',
          using: 'BTREE',
          fields: [
            { name: 'cityId' },
          ]
        },
        {
          name: 'customers_dialCodeId_fk',
          using: 'BTREE',
          fields: [
            { name: 'dialCodeId' },
          ]
        },
      ]
    })
  
    Customer.associate = function (models) {
      Customer.belongsTo(models.Country, { as: 'country', foreignKey: 'countryId' })
      Customer.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' })
      Customer.belongsTo(models.DialCode, { as: 'dialCode', foreignKey: 'dialCodeId' })
      
      Customer.hasMany(models.ApiTracking, { as: 'apiTracking', foreignKey: 'customerId' })
      Customer.hasMany(models.Cart, { as: 'cart', foreignKey: 'customerId' })
      Customer.hasMany(models.CustomerTracking, { as: 'customerTracking', foreignKey: 'customerId' })
      Customer.hasMany(models.Email, { as: 'email', foreignKey: 'customerId' })
      Customer.hasMany(models.Fingerprint, { as: 'fingerprint', foreignKey: 'customerId' })
      Customer.hasMany(models.Invoices, { as: 'invoices', foreignKey: 'customerId' })
      Customer.hasMany(models.PageTracking, { as: 'pageTracking', foreignKey: 'customerId' })
      Customer.hasMany(models.ReturnError, { as: 'returnError', foreignKey: 'customerId' })
      Customer.hasMany(models.Return, { as: 'return', foreignKey: 'customerId' })
      Customer.hasMany(models.SaleError, { as: 'saleError', foreignKey: 'customerId' })
      Customer.hasMany(models.Sale, { as: 'sale', foreignKey: 'customerId' })
      Customer.hasMany(models.SentEmail, { as: 'sentEmail', foreignKey: 'customerId' })
      Customer.hasMany(models.Ticket, { as: 'ticket', foreignKey: 'customerId' })
    }
  
    return Customer
  }