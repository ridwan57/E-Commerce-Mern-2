const express = require('express')
const { createOrUpdateUser, currentUser } = require('../controllers/auth')
const router = express.Router()
// middlewares

const { authCheck } = require('../middlewares/auth');

// controllers
router.post('/create-or-update-user', authCheck, createOrUpdateUser)
router.post('/current-user', authCheck, currentUser)

module.exports = router 