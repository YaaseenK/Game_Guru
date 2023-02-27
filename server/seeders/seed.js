const db = require('../config/connection');
const { manager } = require('../models');
const { events } = require('../models')


const managerData = require('./managerData.json');
const eventData = require("./eventData.json")

db.once('open', async () => {
  await manager.deleteMany({});
  await events.deleteMany({});

  const managerStaff = await manager.insertMany(managerData);
  const eventStaff = await  events.insertMany(eventData);

  console.log('Managers seeded');
  console.log('Events seeded');
  process.exit(0);
});