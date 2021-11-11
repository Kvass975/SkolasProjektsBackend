const express = require('express');
const router = express.Router()
const db = require('../models')

router.get("/", function (req, res) {
    db.Users.find().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.send(err)
    })
})

router.post('/', function (req, res) {
    db.Users.create(req.body).then(data=>{
        res.send("Created")
    }).catch(err=>{
        res.send(err)
    })
})

router.delete('/:id', function (req, res) {
    db.Users.remove({_id: req.params.id}).then(data=>{
        res.send("Deleted")
    }).catch(err=>{
        res.send(err)
    })
})
module.exports = router