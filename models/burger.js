const orm = require('../config/orm');
const connection = require('../config/connection');

const burger = {
  all: async () => {
    return await orm.selectAll();
  },

  update: async id => {
    return await orm.updateOne(id);
  },

  insert: async name => {
    return await orm.insertOne(name);
  }
}

module.exports = burger;
