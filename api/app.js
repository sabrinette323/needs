
const express = require('express');
const cors= require('cors')
require('./db/config')

const userController=require('./controllers/userController')
const produitController=require('./controllers/produitController')
const app = express();

app.use(cors()) //accés des serveurs
app.use(express.json()) //accés des données
app.use(express.urlencoded({ // ykhali les API mte3k ye9bl les fichiers, ykhali les fichiers yodakhlou lel serveur
    extended:true
}))

app.use(express.static('./assets/produits'))    // ykhaliw les dossiers accessible ml Front


app.use('/user',userController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})
app.use('/produit',produitController)
app.get('/', (req, res) => {
    res.status(200).send("welcome to  server");
})




app.listen(3000, function () {
    console.log('server started');
})

