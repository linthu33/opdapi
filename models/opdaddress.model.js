const mongoose=require('mongoose');

const AddressDataSchema=new mongoose.Schema({
    PhoneNo:String,
    MobileNo:String,
    ContactNo:String,
    HomeNo:String,
    StreetName:String,
    City:String,
    State:String,
    Postcode:String,
    Country:String
});
module.exports=mongoose.model("AddressDatamodel",AddressDataSchema)