// const { router } = require("express")
const express  = require("express")
const router = express.Router()
const userControllers = require("../controllers/userControllers")
const cardControllers = require("../controllers/cardControllers")

router.post('/createUser',userControllers.createUser)
router.post('/loginUser',userControllers.loginUser)

router.post('/createCard',cardControllers.createCard)
router.get('/getCard/:id',cardControllers.getCards)

module.exports = router