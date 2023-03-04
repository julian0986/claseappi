/* import { Router } from "express";
import controller from "./products.controller"; */

const {Router} = require('express');
const controller = require('./products.controller');

const router = new Router();

router.get('/', controller.index);
router.get('/:id', controller.showById);
router.post('/', controller.create);

module.exports = router;
//export default router;
