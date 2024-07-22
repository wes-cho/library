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
        const titleData = document.createElement('td');
        const authorData = document.createElement('td');
        titleData.textContent = bookInLibrary.title;
        authorData.textContent = bookInLibrary.author;
        //add data cells to table
        newRow.appendChild(titleData);
        newRow.appendChild(authorData);
    });
};

//on button click, display form
const newBookButton = document.querySelector('#new-book');
const htmlBody = document.querySelector('body');
newBookButton.addEventListener('click', ()=> {
    const newBookForm = document.createElement('form');
    body.insertBefore(newBookForm,table);

    const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title: ';
        titleLabel.setAttribute('for', 'title');
        newBookForm.appendChild(titleLabel);
        
    const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        newBookForm.appendChild(titleInput);

    const lineBreak1 = document.createElement('br');
        newBookForm.appendChild(lineBreak1);

    const authorLabel = document.createElement('label');
        authorLabel.textContent = 'Author: ';
        authorLabel.setAttribute('for', 'author');
        newBookForm.appendChild(authorLabel);

    const authorInput = document.createElement('input');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('id', 'author');
        authorInput.setAttribute('name', 'author');
        newBookForm.appendChild(authorInput);

    const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'submit');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', (event) => {
            //call addBookToLibrary function, passing user inputs as parameters
            event.preventDefault();
             addBookToLibrary(document.getElementById('author').value, document.getElementById('title').value)
             displayLibrary(myLibrary);
             
        });

    const lineBreak2 = document.createElement('br');
        newBookForm.appendChild(lineBreak2);
        newBookForm.appendChild(submitButton);
});

// addBookToLibrary('Titanic', 'Wesley Cho');
// addBookToLibrary('Moby Dick', 'Eddie Huynh');
// addBookToLibrary('Never Search Alone', 'Phyl Terry');