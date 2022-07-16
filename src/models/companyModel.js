const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        type: String
    }
});

module.exports = mongoose.model('companySchema', companySchema);