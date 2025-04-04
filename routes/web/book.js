const express = require('express');
const bookController = require('../../controllers/book');
const router = express.Router();

router.get('/', (req, res)=>{
    bookController.getAll(req, res)
});

router.get('/book-create', (req, res)=>{
    res.render('create_update', {book : {}, errors: []})
});

router.get('/book-update/:id', (req, res)=>{
    bookController.getById(req, res)
});

module.exports = router;
