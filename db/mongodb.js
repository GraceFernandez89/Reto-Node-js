const mongoose = require('mongoose');
const config = require('../config')


mongoose.connection.on('open', ()=> console.log('db connected'))
async function connectDb (){
    const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.dbName}`
    mongoose.connect(uri)
}
module.exports= connectDb