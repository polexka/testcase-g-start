const seed = require('mongoose-seed');
const cards = require('../seeds/cards');

seed.connect('mongodb://127.0.0.1:27017/cardsdb', () => {
  seed.loadModels([ '../models/card', ]);
  seed.clearModels(['card'], () => {
    seed.populateModels(cards, () => {
      seed.disconnect();
    })
  })
});