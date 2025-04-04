const fs = require('fs')
const path = require('path')

if (!global.book_db) {
    global.book_db = path.join(__dirname, '../data', 'book_db.json');
}

const books = JSON.parse(fs.readFileSync(global.book_db, 'utf8'));

let genRandId = (count) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < count; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

let writeToFile = async (books) => {
    await fs.writeFileSync(
      global.book_db,
      JSON.stringify(books, null, 4),
      'utf8'
    );
};
  
  

const bookService = {
    get(req,res){
        return books;
    },
    getById(req,res){
        const id = req.params.id;
        return books.find(item => item.id === id);    
    },
    insert(req,res){
        let newId = genRandId(8);
        const body = req.body;
        const book = {
            title: body.title,
            author: body.author,
            genre: body.genre,
            text: body.text
        };
        books.push({
            id: newId,
            book: book
        });

        writeToFile(books);
        return {
            id: newId,
            book: book
        };
    },
    update(req, res){
        const id = req.params.id;
        const body = req.body;
        const index = books.findIndex(item => item.id === id);
        if (index === -1){
            return null;
        };

        books[index].book = {
            title: body.title,
            author: body.author,
            genre: body.genre,
            text: body.text
        };

        writeToFile(books);
        return books[index];
    },

    delete (req, res) {
        const id = req.params.id;
        const index = books.findIndex(item => item.id === id);
        if (index === -1){
            return false;
        };
        books.splice(index,1)
        writeToFile(books)
        return true;
    },




};

module.exports = bookService;