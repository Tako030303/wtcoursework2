const { validationResult } = require('express-validator');
const bookService = require('../services/book');

const bookController = {

    getById: (req, res) => {
      try {
        const book = bookService.getById(req, res);
        res.render('create_update', {book, errors: []})
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    getAll: (req, res) => {
        try {
          const books = bookService.get(req, res);
          res.render('main', { books })
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    
    create: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render('create_update', { errors: errors.array(), book: req.body });
        }
        try {
          await bookService.insert(req, res);
          res.redirect('/');
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },
    
    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.render('create_update', { errors: errors.array(), book: {id: req.params.id, book: {...req.body}} });
        }
        try {
          const updatedbook = bookService.update(req, res);
          if (!updatedbook) {
            return res.status(404).json({ error: 'book not found' });
          }
          res.redirect('/');
        } catch (error) {x  
          res.status(500).json({ error: error.message });
        }
      },
    
    
    
      delete: (req, res) => {
        try {
          const deleted = bookService.delete(req, res);
          if (!deleted) {
            return res.status(404).json({ error: 'book not found' });
          }
          res.redirect('/');
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
};
    
 module.exports = bookController;