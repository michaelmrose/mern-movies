const Movie = require('../../models/movie')
module.exports = {
    index
}
async function index(req,res){
    let movies = await  Movie.find({}).populate("cast")
    return res.json(movies)
}