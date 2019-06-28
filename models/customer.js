const mongoose = require('mongoose');
const validator = require('validator');

const customerSchema = mongoose.Schema({
    firstname : {type : String},
    lastName : {type : String},
    phone : {
        type : String,
        validate:{
            validator(value){
                if(!validator.isMobilePhone(value, ['en-IN'])) throw new Error('Email not Valid');
            }
        }
    },
    
    email : {
        type : String,
        validate:{
            validator(value){
                if(!validator.isEmail(value)) throw new Error('Email not Valid');
            }
        }
    }
    
});

// Export
module.exports = mongoose.model('Customer', customerSchema);