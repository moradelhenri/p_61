const mongoose = require('mongoose');
const pepperRoutes = require('./routes/pepper');
const Sauce = require('./models/sauce');
const express = require('express');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();


mongoose.connect('mongodb+srv://moradel:bdg97v45@cluster0.dsuuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

  app.use('/images', express.static(path.join(__dirname, 'images')));
 
  app.use('/api/sauces', pepperRoutes);
  app.use('/api/auth', userRoutes);

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;