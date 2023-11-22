const express = require('express');
const userShema = require('../models/user');
const router = express.Router();

// Create user
router.post('/users', (req, res)=>{
    const user = userShema(req.body);
    user.save()
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message:err}));
});

// Get all users
router.get('/users', (req, res)=>{
    userShema.find()
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message:err}));
});

// Get a user
router.get('/users/:id', (req, res)=>{
    const {id} = req.params;
    userShema.findById(id)
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message:err}));
});

// Detele a user
router.delete('/users/:id', (req, res)=>{
    const {id} = req.params;
    userShema.deleteOne({_id:id})
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message:err}));
});

// Update a user
router.put('/users/:id', (req, res)=>{
    const {id} = req.params;
    const {name, age, email}=req.body;
    userShema.updateOne({_id:id}, {$set:{name, age, email}})
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message:err}));
});

module.exports = router;