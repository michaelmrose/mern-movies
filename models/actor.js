const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Movie = require("./movie")

const actorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    movies: [{
        type:Schema.Types.ObjectId,
        ref: "Movie"
    }]
},
{timestamps: true}
)

module.exports = mongoose.model("Actor", actorSchema)