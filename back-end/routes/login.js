
const express = require("express");
const User = require('../models/user')
router = express.Router();
router.get('/login/:username', async (req, res) => {
    const { username } = req.params
    const user = await User.find({user_name : username})
    res.json(user)
  })

exports.router = router;