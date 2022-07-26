const express = require('express');
const { addTicket, retrieveTickets} = require('../controllers/network/ticketController');
const router = express.Router();

router.post('/add'  ,addTicket)
router.get('/retrieve'  ,retrieveTickets)


module.exports = router
