const { body } = require('express-validator');
const fs = require('fs');

const books = JSON.parse(fs.readFileSync('./data/book_db.json', 'utf8'));

const bookValidationRules = () => { 
  return [
    body('title')
      .notEmpty().withMessage('Title field must not be empty'),
    body('author')
      .notEmpty().withMessage('Author field must not be empty'),
    body('genre')
      .notEmpty().withMessage('Genre field must not be empty'),
    body('text')
      .notEmpty().withMessage('Text field must not be empty'),
  ];
};

module.exports = {
  bookValidationRules
};
