const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Actor = require('./actor')

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: [3000, "Cannot accept more than 3000 characters"]
    },
    actors: [{
        type:Schema.Types.ObjectId,
        ref: "Actor"
    }]
},
{timestamps: true}
)

module.exports = mongoose.model("Movie", movieSchema)