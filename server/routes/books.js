const express= require('express')
const router = express.Router();

const Book = require('../db/Models/Book')

router.route('/')
.get((req, res) =>{
return Book.fetchAll()
.then(books => {
  return res.json(books);
})
.catch(err => {
  return res.status(400).send(`Books not found`)
})

});



module.exports = router;