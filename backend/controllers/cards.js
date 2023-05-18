const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  const { start, limit } = req.query;

  if (!start || !limit) {
    Card.find({})
      .then((cards) => res.send(cards))
      .catch(next);
  } else {
    Card.findOne({ index: start })
      .then((startCard) => {
        if (!startCard) {
          return res.status(404).json({ error: 'Start card not found' });
        }
        return Card
          .find({ index: { $gt: startCard.index } })
          .limit(parseInt(limit));
      })
      .then((cards) => res.send(cards))
      .catch(next);
  }
};
