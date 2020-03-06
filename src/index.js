const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const csvFilePath = path.join(__dirname, '../data/MOCK_DATA.csv');
const Template = require('./template.js');

const app = express();


const converter = csv({ delimiter: ',' });
let data;
converter.fromFile(csvFilePath).then(response => {
  data = response;
});

app.get('/', function (req, res) {
  console.log(data);
  res.send(Template(data));
});

app.listen(3000, () => {
  console.log('Ready on http://locahost:3000');
});
