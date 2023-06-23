const express = require('express');

const useControllers = require('./controllers/useControllers');
const addressControllers = require('./controllers/addressControllers')

const router = express.Router();

router.get('/user', useControllers.index)
router.post('/user', useControllers.store)

router.get('/user/:user_id/addresses', addressControllers.index)
router.post('/user/:user_id/addresses', addressControllers.store)

module.exports = router;