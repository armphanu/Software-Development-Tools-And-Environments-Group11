const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://<<username>>:<<password>>@cluster0.2rjb0.mongodb.net/Exercise', {
  useNewUrlParser: true,
}).then(()=>{
    console.log('connect sucess')
}).catch((eer)=>{
    console.log('someting wrong', eer)
})