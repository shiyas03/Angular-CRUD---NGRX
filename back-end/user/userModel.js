
const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name: {
        type: String,
        requrie: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requrie: true
    },
    image: {
        type: String
    },
    isUser: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema);