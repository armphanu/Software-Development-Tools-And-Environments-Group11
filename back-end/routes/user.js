const express = require("express");
const User = require('../models/user')

router = express.Router();

router.put('/profile/:id', async (req, res) => {
    const { id } = req.params
    const filter = { _id: id };

    let doc = await User.findOneAndUpdate(filter, req.body, {
    returnOriginal: false
    });
    doc.save()
 
 
    res.send(doc)
  })



  router.get('/user/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.find({_id : id})
    const userall = await User.find({})
    for(let k =0; k < userall.length; k++){
      if(userall[k]._id == id){
        userall.splice(k, 1);
      }
    }
    if(user[0].tag.length == 0){
      res.json(userall)
    }else{
    for(let j = 0; j < userall.length; j++){
      userall[j].count = 0
      for(let i = 0; i < user[0].tag.length; i++){
        for(let y = 0; y < userall[j].tag.length; y++){
          if(userall[j].tag[y] == user[0].tag[i]){
            userall[j].count = parseInt(userall[j].count)+ 1
          }
        }
      }
    }
    
    var sort = userall.sort((a, b) => {
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