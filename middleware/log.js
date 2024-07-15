const fs = require('fs');

fs.writeFileSync('./newLog.txt', 'The visitors log');
const log = (req, res, next)=>{
    var visitors = `${new Date().toString()}/n and ${req.url}, ${req.ip}`;
    fs.appendFileSync('./newLog.txt', visitors);
    next();
}


module.exports = log;