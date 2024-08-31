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
});