const db = new Sequelize('postgres: //localhost:5432/plantr');
module.exports = db;

const Gardner = db.define('gardeners' {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
})
