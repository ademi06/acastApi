const parser = require('rss-url-parser')
const CryptoJS = require('crypto-js')


let ParserController = {
    parse_rss: async(req, res) => {
        try {
            const {rss} = req.body
            const data = await parser(rss)
            const response = data.map(i => {return {title: i.title, checksum: parseInt(CryptoJS.MD5(i.enclosures[0].url).words.join("")), url: i.link}})
            return res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({"error": error})
        }
    },

    parse_mp3_rss: async(req, res) => {
        try {
            const {rss} = req.body
            const data = await parser(rss)
            const response = data.map(i => {return {title: i.title, checksum: i.enclosures.length}})
            console.log(data[0])
            return res.send(response)
        } catch (error) {
            console.log(error)
            res.status(500).send({error})
        }
    }
}

module.exports = ParserController