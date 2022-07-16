const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        unique: true,
        type: String
    },
    username: {
        required: true,
        unique: true,
        type: String
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'companySchema'
    }
});

module.exports = mongoose.model('userSchema', userSchema);