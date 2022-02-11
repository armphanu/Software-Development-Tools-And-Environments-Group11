const express = require("express");
const User = require('../models/user')

router = express.Router();

router.post('/register', async (req, res) => {
    const payload = req.body
    const product = new User(payload)
    await product.save()
    res.send(product)
    res.status(200).end()
  })

exports.router = router;