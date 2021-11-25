const express = require('express')
const router = express.Router()
const ParserController = require('../controllers/parsercontroller')

router.post('/parse-rss', ParserController.parse_rss)

router.post('/parse-mp3-rss', ParserController.parse_mp3_rss)


module.exports = router