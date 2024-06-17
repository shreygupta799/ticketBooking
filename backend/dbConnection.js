const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/BookMyShow'),
        console.log('Connected to database');
    } catch (error) {
        console.log('Error connecting to database');
    }
}

module.exports=connectDb;