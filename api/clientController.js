const express = require('express');
const bcrypt = require('bcryptjs');
const Client = require('./../models/client');
const Cond = require('./../models/user');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("Welcome to user controller");
})



app.get('/all', async (req, res) => {
  try {
    let clients = await Client.find() //find fonction mn mongoose t3awedhli select * from users 
    // 3anech body fl API hedha,yet3adewch les données
    res.status(200).send(clients);

  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }
})
app.get('/one/:id', async (req, res) => {
  try {

    let id = req.params.id;
    let client = await Client.findOne({ _id: id })

    if (!client) {
      res.status(404).send({ message: "client not found" })
    }
    else {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(400).send({ message: 'API failed !', error })
  }

})
app.put('/update_info/:id', async (req, res) => {
  try {
    let id = req.params.id
    let data = req.body    // récuperer body eli jey ml Front
    let updatedClient = await Client.findOneAndUpdate({ _id: id }, data) // paramétre theni data
    if (!updatedClient) {
      res.status(404).send({ message: "client not found" })
    }
    else {
      res.status(200).send({ message: "client updated" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})
app.delete('/remove/:id', async (req, res) => {
  try {
    let id = req.params.id
    let deletedClient = await Client.findOneAndDelete({ _id: id })
    if (!deletedUser) {
      res.status(404).send({ message: "client not found" })
    }
    else {
      res.status(200).send({ message: "client deleted" })
    }
  } catch (error) {
    res.status(400).send({ message: "API failed", error })
  }
})


app.get('/currentClient/:id', async (req, res) => {
  try {
      let data = req.params.id;
      let user = await Client.findOne({ _id: data })
      if (!client) {
          res.status(404).send({ message: "client not found" })
      }
      else {
          res.status(200).send(client)
      }
  }
  catch (error) {
      res.status(400).send({ message: 'API failed:', error })
  }
})


module.exports = app