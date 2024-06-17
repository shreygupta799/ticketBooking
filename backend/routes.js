const express=require('express');  
const ticket=require('./schema');

const router=express.Router();

const cors=require('cors');
const app=express();


router.use(express.json());
router.use(cors());

router.post('/booking',async(req,res)=>{
    const {movie,slot,seats}=req.body;
   
    try {
        const myData=new ticket({movie,slot,seats});
        const saved=await myData.save();    

        res.status(200).json({data:myData,message:'Booking successful'});
    } catch (error) {
        res.status(500).json({data:null,message:'Booking failed,Please try again'});
    }
})


router.get('/booking',async(req,res)=>{
    try {
        const lastBooking=await ticket.find().sort({_id:-1}).limit(1);
        if(lastBooking.length==0){
            res.status(404).json({data:null,message:'No previous booking found'});
        }else
        res.status(200).json({data:lastBooking,message:'Last booking fetched successfully'});
    } catch (error) {
        res.status(500).json({data:null,message:'Failed to fetch last booking'});
    }
})

module.exports = router;