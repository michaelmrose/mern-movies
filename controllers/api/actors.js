const Actor = require('../../models/actor')
module.exports = {
    index
}
async function index(req,res){
    let actors = await  Actor.find({}).populate("movies")
    return res.json(actors)
}