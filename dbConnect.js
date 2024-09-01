const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const connectFun = ()=>{
  mongoose.connect(`mongodb+srv://kondasaikrishna13:kondasaikrishna13@cluster0.f6bbe.mongodb.net/expense`, {
    
  }).then(() => {
    console.log('Connected to MongoDB successfully');
  }).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
}



module.exports = connectFun
