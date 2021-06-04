const express = require('express')
const Produit = require('./../models/produit')
const app = express()

const fs = require('fs') // manipulation des fichiers nbadlelhom esmhom ..np
const multer = require('multer') //gerer les fichiers eli jeyiin ml Front ay naw3 te3 fichier //fih des fonctionnalités najmou bihom nestockiw des donnés jeyin ml backend
const path = require('path')


// paramétres stockage (taswira wiin bch n7ot'ha)
const stockage = multer.diskStorage({
  destination: './assets/produits', // wiin bch nestocki lfichier
  filename: function (req, file, cb) {     //cb fonction nexécutiwha bch tekhdmelna khedma mou3ayna //req données eli jeyin ml Front w file fichier eli jeya ml front w cb nmanipuli biha esm lfichier
      cb(null, Date.now() + path.extname(file.originalname))  //parametre loul null eli houa erreur null khater 3andich error WL paramétre theni esmou esmou ykoun unique bl date khatrou bl ms WL extname ya3tini l'extension te3 lfichier
  }
})

//Upload (nchekiw type lfile png.. wl 7aja thenya upload)
//check file hia ta3ml verification ltype te3 lfichier
function check(file, cb) {
  
  const types = /jpeg|jpg|png|gif|pdf /;
  const verifExt = types.test(path.extname(file.originalname).toLowerCase()) //extention fichier
  const verifMime = types.test(file.mimetype) //type fichier

  if (verifExt && verifMime) {
      return cb(null, true) //true ma3neha ekhdem lkhedma te3 tabdil lesm
  }
  else {
      cb('Invalid File Type')
  }
}


//Upload 
//configuration multer
const upload = multer({
  storage: stockage, //taswira ml front wiin bch nestockiha
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
      check(file, cb)
  }
})


app.get('/', (req, res) => {
  res.status(200).send("Welcome to user controller");
})



app.post('/add',upload.single('image'), async (req, res) => {
  try {
      let data = req.body;
      let produit = new Produit
      ({
          image: data.image,
          prix: data.prix,
          nom: data.nom,
          categorie: data.categorie,
          reference:data.reference,
          code:data.code,
          description:data.description

      })

      let produitFormDb = await produit.save()
      res.status(201).send({ message: 'produit added successfully' })


  } catch (error) {
      res.status(400).send({ message: 'add produit failed', error })
  }
})


app.get('/all', async (req, res) => {
  try {
    let produits = await Produit.find() //find fonction mn mongoose t3awedhli select * from users 
    // 3anech body fl API hedha,yet3adewch les données
    res.status(200).send(produits);

  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }
})
app.get('/one/:id', async (req, res) => {
  try {

    let id = req.params.id;
    let produit = await Produit.findOne({ _id: id })

    if (!produit) {
      res.status(404).send({ message: "produit not found" })
    }
    else {
      res.status(200).send(produit)
    }
  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }

})
app.put('/update_info/:id', async (req, res) => {
  try {
    let id = req.params.id
    let data = req.body    // récuperer body eli jey ml Front
    let updatedProduit = await Produit.findOneAndUpdate({ _id: id }, data) // paramétre theni data
    if (!updatedProduit) {
      res.status(404).send({ message: "produit not found" })
    }
    else {
      res.status(200).send({ message: "produit updated" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})
app.delete('/remove/:id', async (req, res) => {
  try {
    let id = req.params.id
    let deletedProduit= await Produit.findOneAndDelete({ _id: id })
    if (!deletedProduit) {
      res.status(404).send({ message: "produit not found" })
    }
    else {
      res.status(200).send({ message: "produit deleted" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})


app.get('/currentUser/:id', async (req, res) => {
  try {
      let data = req.params.id;
      let produit = await Produit.findOne({ _id: data })
      if (!produit) {
          res.status(404).send({ message: "produit not found" })
      }
      else {
          res.status(200).send(produit)
      }
  }
  catch (error) {
      res.status(400).send({ message: 'API failed:', error })
  }
})


module.exports = app