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
    posterPath:{
        type: String,
        required: true
    },
    cast: [{
        type:Schema.Types.ObjectId,
        ref: "Actor"
    }]
},
{timestamps: true}
)

module.exports = mongoose.model("Movie", movieSchema)