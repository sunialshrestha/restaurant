const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Item Model
const Item = require('../../models/Items');

// @route GET api/items
//@desc Get All items
//@access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

// @route POST api/items
//@desc Create A Post
//@access Private
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        userID: req.body.userID
    });

    newItem.save().then(item => res.json(item));
})

// @route DELETE api/items
//@desc DELETE A items
//@access Private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(()=> res.json({success: true})))
        .catch(err => res.status(404).json({success:false}));  
})


module.exports = router;