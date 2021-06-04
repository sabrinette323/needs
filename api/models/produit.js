const mongoose=require("mongoose")
const Produit=mongoose.model('produits',{
    image :{
        type:String
    },
    nom:{
        type:String
        // required:true,
        
    },
    prix :{
        type:String
    },
    categorie :{
        type:String
        // required:true
    },
    reference:{
        type:String
    },
    code :{
        type:String
    },
    description : {
        type :String
    }

  
      })

module.exports=Produit