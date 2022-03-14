import express from 'express';
import { IWilderCreate } from '../Interfaces/IWilder';
const router = express.Router();
const wilderController = require('../controllers/wilders');
const execAsyncHandler = require('../middleware/execAsyncHandler');

//findOne
router.get('/', execAsyncHandler(wilderController.readAll))
router.get('/:id', execAsyncHandler(wilderController.findById))

//create
router.post('/', execAsyncHandler(wilderController.create))

//update
router.put('/:id', execAsyncHandler(wilderController.updateById))

//delete
router.delete('/:id', execAsyncHandler(wilderController.deleteById))

module.exports = router;