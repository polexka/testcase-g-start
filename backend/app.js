const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Card = require('./models/card');
const cards = require('./seeds/cards');

const { PORT = 5000 } = process.env;
const allowedCors = ['*'];
const corsOptions = {
  origin: allowedCors,
  optionsSuccessStatus: 200,
  credentials: true,
};

mongoose.connect('mongodb://host.docker.internal:27017/cardsdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
  next();
});

async function seedDatabase() {
  const cardsCount = await Card.countDocuments();
  if (cardsCount === 0) {
    await Card.insertMany(cards);
    console.log('База данных заполнена начальными данными');
  } else {
    console.log('База данных уже содержит данные');
  }
}

seedDatabase().catch(err => console.error(err));

app.use('/api', require('./routes/cards'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
}); 