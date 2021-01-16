var call = false
module.exports = cb => { if(!call) call=true , cb() }