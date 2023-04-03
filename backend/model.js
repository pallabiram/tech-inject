const mongoose = require('mongoose');
const todaySchema = new mongoose.Schema({
    totalPresentTime : {
        type : String,
        required : true
    },
    totalAbsentTime : {
        type : String,
        required : true
    },
    totalExemption : {
        type : String,
        required : true
    },
    totalDeduction : {
        type : String,
        required : true
    },

}, {timestamps:true}
)
module.exports = mongoose.model("Today", todaySchema)