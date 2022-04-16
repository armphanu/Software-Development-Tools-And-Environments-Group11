const express = require("express");
router = express.Router();
const User = require('../models/user')
const Post = require('../models/post')


router.put('/comment/:postid', async (req, res)=>{
    const { postid } = req.params
    const filter = { _id: postid };
    let doc = await Post.findOneAndUpdate(filter, req.body, {
        returnOriginal: false
        });
        doc.save()
        res.send(doc)
})






exports.router = router;