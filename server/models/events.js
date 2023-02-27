const { Schema, model } = require('mongoose');

const eventsSchema = mongoose.Schema({
    eventName: {
        type: String,
        default: 'Unnamed event',
      },
      game: {
        type: String,
        required: true,
      },
      date: {
        type: String,
      },
      description: {
          type: String,
      },
      prizepool: {
          type: Number,
          default: 100,
      }
});

const events = model('events', eventsSchema);
module.exports = events;