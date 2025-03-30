const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String
    },
    customerName: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Invoice', invoiceSchema);