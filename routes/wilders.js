const express = require('express');
const wilderController = require('../controllers/wilders');
const execAsyncHandler = require('../middleware/execAsyncHandler');
const router = express.Router();

router.get('/', execAsyncHandler(wilderController.readAll))
router.get('/:id', execAsyncHandler(wilderController.findById))

//create
router.post('/api/wilders', execAsyncHandler(wilderController.create))

//update
router.put('/:id', execAsyncHandler(wilderController.updateById))

//delete
router.delete('/:id', execAsyncHandler(wilderController.deleteById))

module.exports = router;