const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('companySchema', companySchema);