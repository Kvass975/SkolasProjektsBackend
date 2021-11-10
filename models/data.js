const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Must enter a name"
    },
    surname: {
        type: String,
        required: "Must enter a surname"
    }
})
const Users = mongoose.model('Users', userSchema)
module.exports = Users