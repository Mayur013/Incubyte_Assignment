class Library{
    static books=[];
    
    getBooks(){
        return Library.books;
    }
}

class AddBooks extends Library{
    static chk=/^(?:\d{9}[\dX]|\d{1}-\d{4}-\d{4}-[\dX]|\d{13}|\d{1,5}-\d{1,7}-\d{1,7}-\d{1}$|978[-\s]?\d{1,5}[-\s]?\d{1,7}[-\s]?\d{1,7}[-\s]?\d{1}$|979[-\s]?\d{1,5}[-\s]?\d{1,7}[-\s]?\d{1,7}[-\s]?\d{1}$)/;
    addBooks(book){
        if (!AddBooks.isValidISBN(book.isbn)) {
            throw new Error('Invalid ISBN format');
        }
        

        Library.books.push(book);
    } 
    static isValidISBN(isbn) {
        return AddBooks.chk.test(isbn) ;
    }
}

module.exports = {Library,AddBooks};