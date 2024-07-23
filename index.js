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
    for (let row = 0; row < document.querySelectorAll('tr').length; i++){
        if (document.querySelectorAll('tr')[row].id === 'do-not-delete'){
            continue;
        } else{
            document.querySelectorAll('tr')[row].remove();
        };};
    array.forEach((bookInLibrary) => {
        const newRow = document.createElement('tr');
        newRow.setAttribute('id', `${bookInLibrary.title}-${bookInLibrary.author}`);
        tableBody.appendChild(newRow);
        const titleData = document.createElement('td');
        const authorData = document.createElement('td');
        titleData.textContent = bookInLibrary.title;
        authorData.textContent = bookInLibrary.author;
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
        submitButton.setAttribute('type', 'button'); //would need to implement preventDefault() if type 'submit'
        submitButton.setAttribute('id', 'submit');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', (event) => {
            addBookToLibrary(document.getElementById('title').value, document.getElementById('author').value)
            displayLibrary(myLibrary);
            newBookForm.remove();
            
        });

    const lineBreak2 = document.createElement('br');
        newBookForm.appendChild(lineBreak2);
        newBookForm.appendChild(submitButton);
});
