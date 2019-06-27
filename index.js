const mongoose = require('mongoose');

// get rid of warning
mongoose.Promise = global.Promise;
// Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli',  {useNewUrlParser: true});

// Import model
const Customer = require('./models/customer');

// Add customer
const addCustomer =  (customer) => {
    try{
    Customer.create(customer)
    .then(customer => {
        console.info('New customer added');
        db.close();
    });
    } catch(e){
        console.log('Error caught');
    }
}
 
// Update customer
const updateCustomer = (_id, customer) => {
    Customer.update({_id}, customer)
    .then(customer => {
        console.info('Customer details updated');
        db.close();
    })
}

// Remove customer
const removeCustomer = (_id) => {
    Customer.remove({_id})
    .then(customer => {
        console.info('Customer removed');
        db.close();
    })
}

// List customers
const listCustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} customers`);
        db.close();
    });
}

// Find customer
const findCustomer = (name) => {
    try{
    // Make insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname : search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });
    }catch(e) {
        console.log('error caught')
    }
}

// Export all methods
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}