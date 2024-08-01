const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = 'unread';
}

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(title, author, pages);
  newBook['id'] = `${title}-${author}`;
  myLibrary.push(newBook);
}

//TABLE CREATION
const table = document.querySelector('#library-table');
function displayLibrary(array){
    if (document.querySelector('tbody') != null){
        document.querySelector('tbody').remove();
        const tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
    } else {
        const tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
    };

    array.forEach((bookInLibrary) => {
        const newRow = document.createElement('tr');
        const tableBody = document.querySelector('tbody');
        newRow.setAttribute('id', `${bookInLibrary.title}-${bookInLibrary.author}`);
        tableBody.appendChild(newRow);

        const readCell = document.createElement('td');
            newRow.appendChild(readCell);

        const readButton = document.createElement('input');
            readButton.setAttribute('type', 'checkbox');
            readButton.addEventListener('click', () => {
                if(readData.textContent === 'unread'){
                    bookInLibrary.read = 'read';
                    readData.textContent = 'read';
                    readData.setAttribute('class', 'read');
                } else if (readData.textContent === 'read'){
                    bookInLibrary.read = 'unread';
                    readData.textContent = 'unread';
                    readData.setAttribute('class', 'unread');
                }
            });
            readCell.appendChild(readButton);

        const titleData = document.createElement('td');
            titleData.textContent = bookInLibrary.title;
            newRow.appendChild(titleData);

        const authorData = document.createElement('td');
            authorData.textContent = bookInLibrary.author;
            newRow.appendChild(authorData);

        const pagesData = document.createElement('td');
            pagesData.textContent = bookInLibrary.pages;
            newRow.appendChild(pagesData);

        const readData = document.createElement('td');
            readData.textContent = 'unread';
            readData.setAttribute('class', 'unread');
            newRow.appendChild(readData);

        const removeCell = document.createElement('td');
            newRow.appendChild(removeCell);

        const removeButton = document.createElement('input');
            removeButton.setAttribute('type', 'radio');
            removeCell.appendChild(removeButton);
            removeButton.addEventListener('click', () => {
                newRow.remove();
                for (let book=0; book<myLibrary.length; book++){
                    const index = myLibrary[book].id.indexOf(newRow.id);
                    myLibrary.splice(index, 1);
                };
            });
    });
};

// FORM CREATION
const newBookButton = document.querySelector('#new-book');
const htmlBody = document.querySelector('body');
const container = document.querySelector('#container');
newBookButton.addEventListener('click', ()=> {
    newBookButton.disabled = true;
    const newBookForm = document.createElement('form');
    container.insertBefore(newBookForm,table);
 
    const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title*: ';
        titleLabel.setAttribute('for', 'title');
        newBookForm.appendChild(titleLabel);
    const titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        titleInput.setAttribute('name', 'title');
        newBookForm.appendChild(titleInput);

    const authorLabel = document.createElement('label');
        authorLabel.textContent = 'Author*:';
        authorLabel.setAttribute('for', 'author');
        newBookForm.appendChild(authorLabel);
    const authorInput = document.createElement('input');
        authorInput.setAttribute('type', 'text');
        authorInput.setAttribute('id', 'author');
        authorInput.setAttribute('name', 'author');
        newBookForm.appendChild(authorInput);

    const pagesLabel = document.createElement('label');
        pagesLabel.textContent = 'Pages*: ';
        pagesLabel.setAttribute('for', 'pages');
        newBookForm.appendChild(pagesLabel);
    const pagesInput = document.createElement('input');
        pagesInput.setAttribute('type', 'number');
        pagesInput.setAttribute('id', 'pages');
        pagesInput.setAttribute('name', 'pages');
        newBookForm.appendChild(pagesInput);

    const submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'submit');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', (event) => {
            if (Number(document.getElementById('pages').value) < 0){
                document.getElementById('pages').value = '';
                event.preventDefault();
                alert('Pages cannot be less than zero.')
            } else if (document.getElementById('title').value === '' || document.getElementById('author').value === '' || document.getElementById('pages').value === ''){
                event.preventDefault();
                alert('Please makes sure all fields are filled.')
            } else{
                event.preventDefault();
                addBookToLibrary(
                    document.getElementById('title').value, 
                    document.getElementById('author').value, 
                    document.getElementById('pages').value, 
                )
                displayLibrary(myLibrary);
                newBookForm.remove();
                newBookButton.disabled = false;
            };   
        });
        newBookForm.appendChild(submitButton);
});
