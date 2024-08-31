class Library{
    static books=[];
    
    getBooks(){
        return Library.books;
    }
}

class AddBooks extends Library{
    addBooks(book){
        Library.books.push(book);
    } 
}

module.exports = {Library,AddBooks};