
var fs = require('fs')
const log = (req, res, next) => {

    const visitors = `[${new Date().toString()}] -----> ${req.ip} ${req.url}  \n`
    fs.appendFileSync('./log.txt', visitors);
    next()
  }


module.exports = log;