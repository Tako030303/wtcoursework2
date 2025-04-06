const express = require('express');
const { bookValidationRules } = require('../../validators/book');
const bookController = require('../../controllers/book');
const router = express.Router();

router.post('/book-create', bookValidationRules(), bookController.create);
router.post('/book-update/:id', bookValidationRules(), bookController.update);
router.get('/book-delete/:id', bookValidationRules(), bookController.delete);
router.get('/book-view/:id', bookValidationRules(), bookController.readById);

module.exports = router;
