const express=require('express');
const app=express();

const cors=require('cors');
const connectDb=require('./dbConnection');
const ticket=require('./schema');

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api',require('./routes'));

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})