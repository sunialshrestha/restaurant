const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Schema
const ItemCategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ItemCategory = mongoose.model('ItemCategory', ItemCategorySchema);