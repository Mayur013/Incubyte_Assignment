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
});