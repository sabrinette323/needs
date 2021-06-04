const mongoose=require("mongoose")
const User=mongoose.model('users',{
    nom :{
        type:String
    },
    prenom :{
        type:String
    },
    email :{
        type:String,
        // required:true,
        unique:true
    },
    password :{
        type:String
        // required:true
    },
    num:{
        type:String
    },
    
    
    
    numero :{
        type:String
    },
    role :{
        type:String,
        default:'user'
    }
  
      })

module.exports=User