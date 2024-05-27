import Book from '../Models/books.js';

export const bookData = async (req,res)=>{
try {
    const book = await Book.find()
    res.status(200).json(book)
} catch (error) {
    console.log(error);
    res.status(500).json(error)
}
}