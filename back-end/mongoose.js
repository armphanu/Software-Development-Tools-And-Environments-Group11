const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://armphanu:phanu_123@cluster0.2rjb0.mongodb.net/Exercise', {
  useNewUrlParser: true,
}).then(()=>{
    
}).catch((eer)=>{
    console.log('someting wrong', eer)
})