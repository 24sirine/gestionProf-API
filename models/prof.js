const mongoose = require('mongoose');
const profSchema = mongoose.Schema({
    nomPrenom : {
        type : String,
        required:true,
    },
    adresse: {
        type : String,
        required:true,
    },
    email : {
        type : String,
        required:true,
    },
    telephone : {
        type : Number,
        required:true,
    },
});

module.exports = prof = mongoose.model('prof',profSchema);