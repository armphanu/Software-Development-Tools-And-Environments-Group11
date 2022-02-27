
const express = require("express");
const User = require('../models/user')
const Post = require('../models/post')
router = express.Router();
router.get('/post/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.find({_id : id})
    var rr = (await Post.find({}))
    if(user[0].tag.length == 0){
      res.json(rr)
    }else{
    
    for(let j = 0; j < rr.length; j++){
      rr[j].count = 0
      for(let i = 0; i < user[0].tag.length; i++){
        for(let y = 0; y < rr[j].tag.length; y++){
          if(rr[j].tag[y] == user[0].tag[i]){
             rr[j].count = parseInt(rr[j].count)+ 1
          }
        }
      }
    }
    var sort = rr.sort((a, b) => {
      return a.count - b.count;
  });
   sort = sort.filter(function( obj ) {
    return obj.count !== 0;
   });

    sort.reverse();
  
    res.json(sort)
  }
  })

exports.router = router;