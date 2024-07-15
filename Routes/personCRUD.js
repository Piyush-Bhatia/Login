const express = require('express');
const router = express.Router();
const person = require('../models/person');


router.get('/', (req, res)=>{
    const item = person.find().then(person => res.status(200).json(person))
    .catch(err => res.status(400).json({ error: err.message }));
});

router.post('/addPerson', (req, res)=>{
    const personData = req.body;
    console.log(personData);
    person.insertMany(personData)
    .then(person => {
        res.status(200).json(person);
        console.log('Person saved!');
    })
    .catch(err => {
        res.status(400).json({ error: err.message });
        console.log(err);
    }); 
})

router.put('/updatePerson/:_id', (req, res)=>{
    const personId = req.params.id;
    const data = req.body;
    person.findByIdAndUpdate(personId, data).then(person=>{
        if(!person){
            res.status(400).json({error :'person not found'});
        }
        else{
            res.status(200).json(person);
        }
        })
        .catch(err=>res.status(400).json({error: err.message}))
    res.send('this is a put request');
});

router.delete('/deletePerson/:_id', (req, res)=>{
    const personId = req.params.id;
    person.findByIdAndDelete(personId)
    .then(person=>{
        if(!person){
            return res.status(400).json({error:"person not found"});
        }
        res.send(200).json({message: "person deleted successfully", person});
    })
    .catch(err=>{
        res.status(400).json({error: err.message});
    })
    

});


module.exports = router;

