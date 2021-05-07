const sewaModel = require ('../model/sewa')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        sewaModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input Menyewa'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input Menyewa'
            }))
    
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        sewaModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

exports.getById = (id) =>
    new Promise((resolve, reject) => {
        sewaModel.findOne({
            _id: objectId(id),
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })