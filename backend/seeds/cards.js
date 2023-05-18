const cards = [];

const arr = [
  'Card #',
  'A very long name of card #',
  'A very very long name #',
  'Boo #'
];

for (let i=0; i<100; i++) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  cards.push({
    name: arr[randomIndex] + i,
    index: i
  })
}

module.exports = cards;