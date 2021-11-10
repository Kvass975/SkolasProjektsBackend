const express = require('express');
const router = express.Router()
const db = require('../models')

router.get("/", function (req, res) {
    db.Users.find().then(data=>{
        res.json(data)
    })
})
router.post('/', function (req, res) {
    db.Users.create(req.body).then(data=>{
        res.send("finished")
    })
})

module.exports = router