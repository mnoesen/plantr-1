const { db, Vegetable, Gardener } = require('./models.js');
db.sync({ force: true })
  .then(() => {
    return Vegetable.bulkCreate([
      { name: 'Bell_Pepper', color: 'Orange', planted_on: Date.now() },
      { name: 'Turnip', color: 'White', planted_on: Date.now() },
      { name: 'Potato', color: 'Red', planted_on: Date.now() },
      { name: 'Onion', color: 'Yellow', planted_on: Date.now() },
    ])
  })
  .then(() => {
    return Gardener.bulkCreate([
      { name: 'Matthew', age: 35, favorite_vegetable: 3},
      { name: 'Kevin', age: 23, favorite_vegetable: 1}
    ]).then(() => {
      console.log('Database synced');
      //   return Vegetable.findAll();
      // })
    });
  })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
  })
  .finally(() => {
    db.close();
  });

// Vegetable.create({
//   name: 'Bell Pepper',
//   color: 'Orange',
//   planted_on: Date.now(),
// });
// Vegetable.create({
//   name: 'Turnip',
//   color: 'White',
//   planted_on: Date.now(),
// });
// Vegetable.create({ name: 'Potato', color: 'Red', planted_on: Date.now() });
// Vegetable.create({
//   name: 'Onion',
//   color: 'Yellow',
//   planted_on: Date.now(),
