const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstname : {type : String},
    lastName : {type : String},
    phone : {type : String},
    email : {type : String}
});

// Export
module.exports = mongoose.model('Customer', customerSchema);