const express = require('express')
const { createOrUpdateUser } = require('../controllers/auth')
const router = express.Router()
// middlewares

const { authCheck } = require('../middlewares/auth');

// controllers
router.post('/create-or-update-user', authCheck, createOrUpdateUser)

const myMiddleware = (req, res, next) => {
    console.log('I am Midlle')
    next()

}

router.get('/testing', myMiddleware, (req, res) => {
    res.json({
        data: 'testing'
    })
})
module.exports = router 