const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Sabrinette:PFE2021@cluster0.91vuz.mongodb.net/needs?retryWrites=true&w=majority', {

    useNewUrlParser:true,
    useCreateIndex:true,         // connect hia fonction asynchrone na3rfouch temps d'execution mte3ha mouch ma3rouf
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(() => { // fl asynchrone n7otou then ama synchrone n7otou try
    console.log("we are connected to database !")
})
.catch(() => {
    console.log("connection ERROR !")
})
module.exports=mongoose