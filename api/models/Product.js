/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'products',
    attributes: {
        product_id: {
            field: 'product_id',
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        uid: {
            field: 'uid',
            type: Sequelize.STRING(64),
            required: true,

        },
        name: {
            field: 'name',
            type: Sequelize.STRING
        },
        description: {
            field: 'description',
            type: Sequelize.TEXT
        },

        price: {
            field: 'price',
            type: Sequelize.INTEGER
        }
    },

    add: function(product) {
        return new Promis((resolve, reject) => {
            Product.create(product).then((product) => {
                resolve(product);
            }).catch((error) => {
                reject(error);
            })
        });
    },
      /*
   * Table options
   */
  options: {
    tableName: 'products',
    timestamps: true,
    paranoid: true,
    underscored: true,
    indexes: [
      // and index for uid lookups
      {
        name: 'idx_metafield_client',
        unique: true,
        fields: ['client_id', 'clients_metafield_id']
      },
    ],

}}