const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 18
    },
    phone: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("User", userSchema);
