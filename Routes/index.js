const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // res.send('Hello from the routes index');
    res.render('index', {name: "My Page"});
});

module.exports = router;