const {AddBooks,BorrowBooks,ReturnBooks} = require('../Library');
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

describe('Borrow book from the library',()=>{
    let borrowBooksInstance;
    let addBooksInstance;
    beforeAll(()=>{

        borrowBooksInstance=new BorrowBooks();
        addBooksInstance=new AddBooks();
    });

    test('should borrow available book ',()=>{
        // add book in database
        const book1= new Book('9971-1-2222-3','web technology','ruby','2007');
        addBooksInstance.addBooks(book1);
        // borrow book 
        const success=borrowBooksInstance.borrowBooks('9971-1-2222-3');
        //return msg if book is available for borrow
        expect(success).toEqual('book available for borrow');
    });  

    test('unavailable books should not be borrowed',()=>{
        // here web technology book is already borrowed so it should not be borrowed
        const chk=borrowBooksInstance.borrowBooks('9971-1-2222-3');
        //it return string that all books are borrowed by someone
        expect(chk).toEqual('all books already has been borrowed');    
    }); 
    
    test('requested book does not exist or isbn is null',()=>{
        //here, book with given isbn does not exist so it throws error
        expect(()=>borrowBooksInstance.borrowBooks('9971-5-0210-8')).toThrow('requested book does not exist');
        //here isbn is null so it throws error
        expect(()=>borrowBooksInstance.borrowBooks()).toThrow('requested book does not exist');
    });
});

describe('return book to the library',()=>{
    let borrowBooksInstance;
    let addBooksInstance;
    let returnBooksInstance;
    beforeAll(()=>{

        borrowBooksInstance=new BorrowBooks();
        addBooksInstance=new AddBooks();
        returnBooksInstance=new ReturnBooks();
    });

    test('should return book which belongs to the library',()=>{
        const book =new Book('85-359-0277-5','software engineering','Scribner','2010');
        addBooksInstance.addBooks(book);
        borrowBooksInstance.borrowBooks('85-359-0277-5');
        //after borrowing book, it should able to return
        const status=returnBooksInstance.returnBooks('85-359-0277-5');
        //it return successfully return msg
        expect(status).toEqual('Book returned successfully');

    });
});
