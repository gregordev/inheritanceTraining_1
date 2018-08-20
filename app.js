/*
BOOKSTORE

1) Create objects:
  - Book
    > title
    > author
    > pages
    > borrowed

  - Magazine
    > title
    > author
    > pages
    > borrowed

2) Create functions:
  - addBook x
  - removeBook x
  - checkIfBorrowed x
  - showBook x
  - borrowBook x
  - showBookstore x

  do the same with Magazines!

*/

let arrayBooks = [];

// Book Constructor
function Book(title, author, pages, borrowed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.borrowed = borrowed || 0;
}

// Magazine Constructor
function Magazine(title, author, pages) {
  Book.call(this, title, author, pages);
}
Magazine.prototype = Object.create(new Book());

Book.prototype.showBook = function() {
  console.log(`
  ---------------------------------
  Title: ${this.title}
  Author: ${this.author}
  Number of pages: ${this.pages}
  Available: ${this.checkIfBorrowed()}
  ---------------------------------` );
}

Book.prototype.checkIfBorrowed = function() {
  if (this.borrowed === 0) {
    return 'Yes'
  } else {
    return 'No';
  }
}


function borrowBook(title) {
  let tempTitle = title;
  for (let y in arrayBooks) {
    if (arrayBooks[y].title === tempTitle) {
      if (arrayBooks[y].borrowed !== 1) {
        arrayBooks[y].borrowed = 1;
        console.log(`You borrowed a book: ${arrayBooks[y].title}`);
      } else {
        console.log('You cannot borrow this book because its not available');
      }
      
      break;
    } else {
            
    }
  }
}

function addBook(title, author, pages) {
  arrayBooks.push(new Book(title, author, pages));
}

function addMagazine(title, author, pages) {
  arrayBooks.push(new Magazine(title, author, pages));
}

function removeBook(title) {
  let tempTitle2 = title;
  arrayBooks = arrayBooks.filter( (x) => {
    return x.title !== tempTitle2;
  });
}

function showBookstore() {
  for (let i = 0; i < arrayBooks.length; i++) {
    console.log(arrayBooks[i]);
    arrayBooks[i].showBook();
    
  }
}

addBook('La vita', 'Dave Keanan', 122, 0);
addBook('Cosmonergic', 'Martin Wright', 265);
addMagazine('Internet of Things', 'National Geographic', 89);

showBookstore();

borrowBook('Internet of Things');

showBookstore();