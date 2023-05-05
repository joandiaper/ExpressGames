// models/pptls.js

const mongoose = require('mongoose');

const pptlsSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
});

const PPTLS = mongoose.model('pptls', pptlsSchema);

module.exports = { PPTLS };
