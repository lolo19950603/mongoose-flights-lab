const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.post('/tickets', ticketsCtrl.create);
router.get('/tickets/:id/new', ticketsCtrl.new);

module.exports = router;