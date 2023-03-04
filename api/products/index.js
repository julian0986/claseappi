/* import { Router } from "express";
import controller from "./products.controller"; */

const {Router} = require('express');
const controller = require('./products.controller');

const router = new Router();

router.get('/', controller);

module.exports = router;
//export default router;
