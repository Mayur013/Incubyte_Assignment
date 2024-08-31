const {AddBooks} = require('../Library');
const Book = require('../Book');

describe('Adding books to the library',()=>{

    //create instance of AddBooks class for adding book
    let addBooksInstance;
    beforeAll(()=>{
         addBooksInstance=new AddBooks();
    });
    test('should add book to the library',()=>{
        const book= new Book('99921-58-10-7','java for dev','liang','2004');
        addBooksInstance.addBooks(book); // add book to the library
        // check that allbooks of library contains added book
        expect(addBooksInstance.getBooks()).toContainEqual(book);
    }); 

    test('should handle invalid isbn format',()=>{
        const book1= new Book('9971-1-2222-','web technology','ruby','2007');
        //isbn checked before adding book, error will be thown on invalid isbn
        expect(() => addBooksInstance.addBooks(book1)).toThrow('Invalid ISBN format');
    });

    test('should handle duplicates for the existed book and for wrong info book',()=>{
        // for all copies of book, isbn is same
        const book= new Book('99921-58-10-7','java for dev','liang','2004');
        const msg=addBooksInstance.addBooks(book);
        // if book already exist then it increases book count
        expect(msg).toEqual('book count increse for this book');
        const book1= new Book('99921-58-10-7','java for ev','liang','2004');
        // if isbn matches in database but other details does not match then it return as book details is wrong 
        expect(() => addBooksInstance.addBooks(book1)).toThrow('isbn or book detail is wrong');
    });

    test('haldle invalid or insufficient data',()=>{
        const book= new Book('99921-58-10-4','liang','2004');
        // throws error when data is missing
        expect(() => addBooksInstance.addBooks(book)).toThrow('Invalid book data');
    });
});