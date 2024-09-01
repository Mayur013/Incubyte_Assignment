class Library{
    static books=[];
    
    getBooks(){
        return Library.books;
    }
}

class AddBooks extends Library{
    static chk=/^(?:\d{9}[\dX]|\d{1}-\d{4}-\d{4}-[\dX]|\d{13}|\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$|978[-\s]?\d{1,5}[-\s]?\d{1,7}[-\s]?\d{1,7}[-\s]?\d{1}$|979[-\s]?\d{1,5}[-\s]?\d{1,7}[-\s]?\d{1,7}[-\s]?\d{1}$)/;
    addBooks(book){
        if (!book || !book.isbn || !book.title || !book.author || !book.year) {
            throw new Error('Invalid book data'); 
        }
        if (!AddBooks.isValidISBN(book.isbn)) {
            throw new Error('Invalid ISBN format');
        }
        if(Library.books.some(b=>b.isbn===book.isbn || b.title===book.title)){
            const mybook=Library.books.find(b=>b.isbn===book.isbn);
            if(mybook.isbn===book.isbn && mybook.title===book.title && mybook.author===book.author && mybook.year===book.year)
            {
                mybook.count++;
                return 'book count increse for this book';
            }
            else{
            throw new Error('isbn or book detail is wrong');
            }
        }

        Library.books.push(book);
    } 
    static isValidISBN(isbn) {
        return AddBooks.chk.test(isbn) ;
    }
}

class BorrowBooks extends Library{
    borrowBooks(isbn){
        const mybook=Library.books.find(b=>b.isbn===isbn);
        if(mybook && mybook.count!==0){
            mybook.count--;
            return 'book available for borrow';
        }
        else if(mybook && mybook.count===0){
            return 'all books already has been borrowed';
        }
        else{
            throw new Error('requested book does not exist');
        }
    }
}

class ReturnBooks extends Library{
    returnBooks(isbn){
        const mybook=Library.books.find(b=>b.isbn===isbn);
        if(mybook){
            //if book belongs to the library then it increase copy_count and return msg
            mybook.count++;
            return 'Book returned successfully';
        }
        
    }
}

module.exports = {Library,AddBooks,BorrowBooks,ReturnBooks};