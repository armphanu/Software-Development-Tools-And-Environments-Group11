const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Exercise', {
  useNewUrlParser: true,
}).then(()=>{
    console.log('connect sucess')
}).catch((eer)=>{
    console.log('someting wrong', eer)
})