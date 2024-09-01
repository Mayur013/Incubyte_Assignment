* # Add Books
  ### 1. First test for adding book

  this test is for adding book into library 
  
  ![image](https://github.com/user-attachments/assets/d0b2d965-4f06-4cb2-a1cd-9e91d9e5d97c)

  after adding production code for passing test

  ![image](https://github.com/user-attachments/assets/2d93fd0c-24cc-403f-85f1-bc4476728f5c)

  ### 2. Test for handling invalid isbn format
  this test check for invalid format of isbn number
  ![image](https://github.com/user-attachments/assets/c57d51c1-4591-4ea3-bf63-0e5807ede77e)

  after adding production code for checking isbn number
  ![image](https://github.com/user-attachments/assets/80df1471-f391-4358-8939-10564d531d0c)

  ### 3. This test handles duplicate book addition as well as wrong info of book
  this test fails because it dont have production code for check duplication of book
  ![image](https://github.com/user-attachments/assets/cb553118-3d95-4278-9c97-cd360fd35f41)

  after adding production code, book count will be increse if database has same book
  ![image](https://github.com/user-attachments/assets/665f64a5-083a-4348-bb8d-2ab2ab4b6a72)

  ### 4. Test for missing value and invalid data
  this test fails because there is no production code for test
  ![image](https://github.com/user-attachments/assets/3ef8409a-62f7-4b34-8513-868da7f5284f)

  after adding production code, now it return error msg when value is insufficient or invalid
  ![image](https://github.com/user-attachments/assets/aadb1972-449d-4e23-b875-0544d393cb93)

  
* # Borrow Books
  ### 1. Test for borrow available book
  this test case fails because we dont have BorrowBook class for borrow book
  ![image](https://github.com/user-attachments/assets/163650fc-d0bd-4675-b502-aa2260251afa)

  after writing production code, it can return msg when book is borrowed
  ![image](https://github.com/user-attachments/assets/5cfba331-4bc6-4644-8e60-4d23c64716c2)

  ### 2. Unavailable(all copies of this book borrowed) book should not be borrowed 
  this test case fails as code for identifying book is not developed
  ![image](https://github.com/user-attachments/assets/e81dc9cd-abca-4347-9653-b1bbec1f35e8)

  after adding production code, it can be identify unavailable book and restrict it for borrowing
  ![image](https://github.com/user-attachments/assets/419d2fdd-7a8f-4a92-87c6-15512b878152)

  ### 3. Test for check that requested book exists in library
  here, test fails because error code not implemented 
  ![image](https://github.com/user-attachments/assets/4ee7a09a-3b6e-4640-a14c-b99c75db26eb)

  this test pass as if gives error for non-existed book and null values isbn
  ![image](https://github.com/user-attachments/assets/7697d982-d67d-431c-9e7f-622738dc2204)

* # Return Books
  ### 1. Test for return book which borrowed from library
  this test case fails because Return Book class is not defined
  ![image](https://github.com/user-attachments/assets/8f360664-91e1-4e45-a256-89ce4c3e774b)

  after adding production code for ReturnBook class, test passes
  ![image](https://github.com/user-attachments/assets/8f5210d3-4e54-443e-b2d5-624a3b633077)
  
  ### 2. Test for handle book which does not belong to the library
  this test fails because ReturnBooks class does not handle book which is not from the library
  ![image](https://github.com/user-attachments/assets/feee37db-4f77-41e9-92d1-f1d4fae7a7a8)

  after adding production code for handle unknown book, test passes
  ![image](https://github.com/user-attachments/assets/6233f934-a3d3-4752-af2d-0b5fe81eda52)

* # View Available Books
  ### 1. Test for View books which has copy_count >0
  here test case fails because there is no production code for ViewAvailableBook class
  ![image](https://github.com/user-attachments/assets/dc0536ec-ac9e-4d93-997d-c993130905e6)

  after adding production code for ViewAvailableBook class, it return books with copy_count >0
  so test passes
  ![image](https://github.com/user-attachments/assets/00b36835-ce52-4185-980c-fdd9bda72d61)


  





  







  

