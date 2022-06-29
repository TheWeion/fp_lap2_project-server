const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users')
const metrics = require('../models/metrics')

router.get('/', usersController.index);
router.get('/:id', usersController.show);
router.get('/habits/:id', metrics.display);
router.post('/', usersController.create);
router.delete('/:id', usersController.destroy);

module.exports = router;
