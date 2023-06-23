const express = require('express');

const useControllers = require('./controllers/useControllers');
const addressControllers = require('./controllers/addressControllers')
const techControllers = require('./controllers/techControllers')
const reportControllers = require('./controllers/reportControllers')

const router = express.Router();

router.get('/user', useControllers.index)
router.post('/user', useControllers.store)

router.get('/user/:user_id/addresses', addressControllers.index)
router.post('/user/:user_id/addresses', addressControllers.store)

router.get('/user/:user_id/techs', techControllers.index)
router.post('/user/:user_id/techs', techControllers.store)
router.delete('/user/:user_id/techs', techControllers.delete)

router.get('/report', reportControllers.show)

module.exports = router;