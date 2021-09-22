const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/AMBO');
        console.log('Connect MongoDB successfully!!!');
    } catch (error) {
        console.log('Connect MongoDB failure!!!');
    }
}

module.exports = { connect };