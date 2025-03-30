const mongoose = require('mongoose');

// Defines what an invoice looks like in the database.
const invoiceSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    purchaseOrderNumber: {  
        type: String,
        required: true 
    },
    tax: {
        type: Boolean,
        required: true
    },
    freight: {  
        type: Boolean,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true 
    }
});

export default mongoose.model('Invoice', invoiceSchema);