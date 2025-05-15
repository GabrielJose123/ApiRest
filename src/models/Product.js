const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    productname: {
        type: String,
        required:true
    },

    productDescription: {
        type: String,
    },
    productPrice: {
        type: Number,
        require:true
    },
    productQuantity: {
        type:Number,
        required:true
    },
    productImage: {
        type: String
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Product', Schema)