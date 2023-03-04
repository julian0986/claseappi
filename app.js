/* 
import express from 'express';
import routeConfig from './api/routes';
 */
const express = require('express');
const routeConfig = require('./api/routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

routeConfig(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
