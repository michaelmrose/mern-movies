const Actor = require('../../models/actor')
module.exports = {
    index,detail
}
async function index(req,res){
    let actors = await  Actor.find({}).populate("movies")
    return res.json(actors)
}

async function detail(req,res){
    let actor = await Actor.findOne({_id: req.params.id}).populate("movies")
    return res.json(actor)
}