const express = require('express')
const MovieRouter = require('./MovieRouter.js')
const DirectorRouter = require('./DirectorRouter.js')
const router = express.Router()

router.use(MovieRouter,DirectorRouter)

module.exports = router