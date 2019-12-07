const mongoose=require('mongoose');
const Schema = mongoose.Schema;

let userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String
    }
});

module.exports=mongoose.model('User',userSchema);




// let addressSchema=new mongoose.Schema({
//     country:{
//         type:String 
//     },
//     state:{
//         type:String
//     },
//     distric:{
//         type:String
//     }
// });
// module.exports=mongoose.model('Address',addressSchema);