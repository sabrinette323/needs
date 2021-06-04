const mongoose=require("mongoose")
const Client=mongoose.model('clients',{
    nom :{
        type:String
    },
 prenom :{
        type:String
    },
    email:{
        type:String
        // required:true,
        
    },
    numero :{
        type:String
        // required:true
    }

  
      })

module.exports=Client