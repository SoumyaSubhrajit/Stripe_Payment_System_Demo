require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const storeItems = new Map([
  [1, { priceInCents: 1000, name: "Learn From Soumya Subhrajit" }],
  [2, { priceInCents: 2000, name: "Learn From Soumya Subhrajit" }],
])


PORT = 3000;

app.listen(PORT, () => {
  console.log(`Your port ${PORT} is listening`);
})