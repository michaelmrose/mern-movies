const Movie = require('../../models/movie')
module.exports = {
    index,
    detail

}
async function index(req,res){
    let movies = await  Movie.find({}).populate("cast")
    return res.json(movies)
}

async function detail(req,res){
    let movie = await Movie.findOne({_id: req.params.id}).populate("cast")
    return res.json(movie)
}