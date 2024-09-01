# **Library Management System Project Report**

## **Add Books**

1. **Test Case: Add a Book**
     ```javascript
       test('should add book to the library',()=>{
        const book= new Book('99921-58-10-7','java for dev','liang','2004');
        addBooksInstance.addBooks(book); // add book to the library
        // check that allbooks of library contains added book
        expect(addBooksInstance.getBooks()).toContainEqual(book);
        }); 
      ```
   - **Purpose**: This test verifies the functionality of adding a book to the library.
   - **Test Result**:
     ![Initial Test](https://github.com/user-attachments/assets/d0b2d965-4f06-4cb2-a1cd-9e91d9e5d97c)
   - **Post-Production Code**: The test passes after implementing the required functionality.
     ![Post Code Implementation](https://github.com/user-attachments/assets/2d93fd0c-24cc-403f-85f1-bc4476728f5c)

2. **Test Case: Handle Invalid ISBN Format**
     ```javascript
      test('should handle invalid isbn format',()=>{
          const book1= new Book('9971-1-2222-','web technology','ruby','2007');
          //isbn checked before adding book, error will be thown on invalid isbn
          expect(() => addBooksInstance.addBooks(book1)).toThrow('Invalid ISBN format');
      });
     ```
   - **Purpose**: This test checks for an invalid ISBN number format.
   - **Test Result**:
     ![Invalid ISBN Format](https://github.com/user-attachments/assets/c57d51c1-4591-4ea3-bf63-0e5807ede77e)
   - **Post-Production Code**: After adding code to validate ISBN numbers, the test passes.
     ![Post Code Implementation](https://github.com/user-attachments/assets/80df1471-f391-4358-8939-10564d531d0c)

3. **Test Case: Duplicate Book Addition & Incorrect Book Information**
     ```javascript
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
     ```
   - **Purpose**: This test handles scenarios of duplicate book additions and incorrect book information.
   - **Test Result**: The test fails initially due to the lack of production code to handle duplicates.
     ![Duplicate Book](https://github.com/user-attachments/assets/cb553118-3d95-4278-9c97-cd360fd35f41)
   - **Post-Production Code**: After implementing the duplication check, the test passes.
     ![Post Code Implementation](https://github.com/user-attachments/assets/665f64a5-083a-4348-bb8d-2ab2ab4b6a72)

4. **Test Case: Missing Values & Invalid Data**
     ```javascript
      test('haldle invalid or insufficient data',()=>{
        const book= new Book('99921-58-10-4','liang','2004');
        // throws error when data is missing
        expect(() => addBooksInstance.addBooks(book)).toThrow('Invalid book data');
        });
     ```
   - **Purpose**: This test checks for missing or invalid input data.
   - **Test Result**: The test fails because there’s no production code to handle these cases.
     ![Missing Values](https://github.com/user-attachments/assets/3ef8409a-62f7-4b34-8513-868da7f5284f)
   - **Post-Production Code**: After adding validation checks, the test passes with an appropriate error message for insufficient or invalid data.
     ![Post Code Implementation](https://github.com/user-attachments/assets/aadb1972-449d-4e23-b875-0544d393cb93)

## **Borrow Books**

1. **Test Case: Borrow an Available Book**
     ```javascript
      test('should borrow available book ',()=>{
        // add book in database
        const book1= new Book('9971-1-2222-3','web technology','ruby','2007');
        addBooksInstance.addBooks(book1);
        // borrow book 
        const success=borrowBooksInstance.borrowBooks('9971-1-2222-3');
        //return msg if book is available for borrow
        expect(success).toEqual('book available for borrow');
        });
     ```
   - **Purpose**: This test checks if a book can be borrowed from the library.
   - **Test Result**: The test fails as the `BorrowBook` class is not implemented.
     ![Borrow Book](https://github.com/user-attachments/assets/163650fc-d0bd-4675-b502-aa2260251afa)
   - **Post-Production Code**: After implementing the class, the test passes, and a message is returned when the book is borrowed.
     ![Post Code Implementation](https://github.com/user-attachments/assets/5cfba331-4bc6-4644-8e60-4d23c64716c2)

2. **Test Case: Prevent Borrowing of Unavailable Books**
     ```javascript
      test('unavailable books should not be borrowed',()=>{
        // here web technology book is already borrowed so it should not be borrowed
        const chk=borrowBooksInstance.borrowBooks('9971-1-2222-3');
        //it return string that all books are borrowed by someone
        expect(chk).toEqual('all books already has been borrowed');    
        }); 
     ```
   - **Purpose**: This test ensures that a book cannot be borrowed if all copies are already borrowed.
   - **Test Result**: The test fails because the code to check the book’s availability is not developed.
     ![Unavailable Book](https://github.com/user-attachments/assets/e81dc9cd-abca-4347-9653-b1bbec1f35e8)
   - **Post-Production Code**: After adding the necessary checks, the test passes.
     ![Post Code Implementation](https://github.com/user-attachments/assets/419d2fdd-7a8f-4a92-87c6-15512b878152)
3. **Test Case: Ensure Book Exists in Library**
    ```javascript
      test('requested book does not exist or isbn is null',()=>{
        //here, book with given isbn does not exist so it throws error
        expect(()=>borrowBooksInstance.borrowBooks('9971-5-0210-8')).toThrow('requested book does not exist');
        //here isbn is null so it throws error
        expect(()=>borrowBooksInstance.borrowBooks()).toThrow('requested book does not exist');
        });
    ```
   - **Purpose**: This test verifies that the requested book exists in the library.
   - **Test Result**: The test fails because the error handling code is not yet implemented.
     ![Book Existence](https://github.com/user-attachments/assets/4ee7a09a-3b6e-4640-a14c-b99c75db26eb)
   - **Post-Production Code**: After implementing the error handling, the test passes by returning an error for non-existent books or null ISBN values.
     ![Post Code Implementation](https://github.com/user-attachments/assets/7697d982-d67d-431c-9e7f-622738dc2204)

## **Return Books**

1. **Test Case: Return Borrowed Book**
     ```javascript
      test('should return book which belongs to the library',()=>{
        const book =new Book('85-359-0277-5','software engineering','Scribner','2010');
        addBooksInstance.addBooks(book);
        borrowBooksInstance.borrowBooks('85-359-0277-5');
        //after borrowing book, it should able to return
        const status=returnBooksInstance.returnBooks('85-359-0277-5');
        //it return successfully return msg
        expect(status).toEqual('Book returned successfully');
        });
     ```
   - **Purpose**: This test checks if a borrowed book can be successfully returned.
   - **Test Result**: The test fails as the `ReturnBook` class is not defined.
     ![Return Book](https://github.com/user-attachments/assets/8f360664-91e1-4e45-a256-89ce4c3e774b)
   - **Post-Production Code**: After implementing the `ReturnBook` class, the test passes.
     ![Post Code Implementation](https://github.com/user-attachments/assets/8f5210d3-4e54-443e-b2d5-624a3b633077)

2. **Test Case: Handle Book Not Belonging to the Library**
      ```javascript
        test('unable to return book which does not belong to library',()=>{
        // throws error if book does not belong to library
        expect(()=>returnBooksInstance.returnBooks('0-85131-041-9')).toThrow('book does not belong to library');
        });
      ```
   - **Purpose**: This test ensures that a book not belonging to the library is not accepted when returned.
   - **Test Result**: The test fails because the `ReturnBook` class does not handle this scenario.
     ![Unknown Book](https://github.com/user-attachments/assets/feee37db-4f77-41e9-92d1-f1d4fae7a7a8)
   - **Post-Production Code**: After updating the code to handle unknown books, the test passes.
     ![Post Code Implementation](https://github.com/user-attachments/assets/6233f934-a3d3-4752-af2d-0b5fe81eda52)

## **View Available Books**

1. **Test Case: View Books with Copy Count > 0**
     ```javascript
      test('should display all books which has copy_count >0 ',()=>{
        const book=new Book('93-86954-21-4','cpp','j.p. arya','2020');
        addBooksInstance.addBooks(book);
        // add book into library and then view available books
        const result=viewBooksInstance.viewAvailableBook();
        //library has only 1 book so it should return added book
        expect(result).toEqual([book]);

        borrowBooksInstance.borrowBooks('93-86954-21-4');
        // borrow book from library and then view available books
        const result1=viewBooksInstance.viewAvailableBook();
        //available book is borrowed so it should return empty array
        expect(result1).toEqual([]);

        returnBooksInstance.returnBooks('93-86954-21-4');
        // return book to library and then view available books
        const result2=viewBooksInstance.viewAvailableBook();
        //it should return book which is just returned
        expect(result2).toEqual([book]);
        });
     ```
   - **Purpose**: This test checks if the library correctly displays books that have a copy count greater than zero.
   - **Test Result**: The test fails due to the absence of a `ViewAvailableBook` class.
     ![View Available Books](https://github.com/user-attachments/assets/dc0536ec-ac9e-4d93-997d-c993130905e6)
   - **Post-Production Code**: After implementing the `ViewAvailableBook` class, the test passes, showing only books with a positive copy count.
     ![Post Code Implementation](https://github.com/user-attachments/assets/00b36835-ce52-4185-980c-fdd9bda72d61)
