class Book{
    constructor(isbn,title,author,year){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
        this.year=year;
        this.count=1;
    }
}

module.exports= Book;