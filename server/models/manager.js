const { Schema, model } = require('mongoose');

const managerSchema = new Schema({
    firstName: {
        type: String, 
    },
    lastName: {
        type: String,
    },
    gamerTag: {
        type: String,
    },
    managerId: {
        type: Number,
        default: 2,
    },
});

const manager = model('manager', managerSchema);
module.exports = manager;