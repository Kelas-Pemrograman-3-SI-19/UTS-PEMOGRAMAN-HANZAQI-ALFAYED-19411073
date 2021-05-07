const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const sewaSchema = new Schema({

        namapenyewa: {
        type : String
    },
        alamatpenyewa: {
        type : String
    },   
        hargasewaperjam: {
        type : String
    },

        jenismobil: {
        type : String
    },

        lamasewa: {
        type : String
    }
})

module.exports = mongoose.model('sewa', sewaSchema)