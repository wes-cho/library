const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(title, author) {
  let newBook = new Book(title, author);
  myLibrary.push(newBook);
}

const table = document.querySelector('#library-table');
const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

function displayLibrary(array){
    array.forEach((bookInLibrary) => {
        //create new row & add to table
        const newRow = document.createElement('tr');
        tableBody.appendChild(newRow);
        //create new entries & change text content
        const column1 = document.createElement('td');
        const column2 = document.createElement('td');
        column1.textContent = bookInLibrary.title;
        column2.textContent = bookInLibrary.author;
        //add data cells to table
        newRow.appendChild(column1);
        newRow.appendChild(column2);
    });
};

//on button click, display form
const newBookButton = document.querySelector('#new-book');
const htmlBody = document.querySelector('body');
newBookButton.addEventListener('click', ()=> {
    const newBookForm = document.createElement('form');
    //newBookForm is not a node??
    body.insertBefore(newBookForm,table); //change where the form is appended later

    const titleLabel = document.createElement('label');
    newBookForm.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    newBookForm.appendChild(titleInput);
    const authorLabel = document.createElement('label');
    newBookForm.appendChild(authorLabel);
    const authorInput = document.createElement('input');
    newBookForm.appendChild(authorInput);

    titleLabel.setAttribute('for', 'title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'bookTitle');
    titleInput.setAttribute('name', 'title');

    authorLabel.setAttribute('for', 'title');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'bookAuthor');
    authorInput.setAttribute('name', 'title');
    
});

//form collects book title and book author
//call addBookToLibrary function, passing user inputs as parameters

addBookToLibrary('Titanic', 'Wesley Cho');
addBookToLibrary('Moby Dick', 'Eddie Huynh');
displayLibrary(myLibrary);