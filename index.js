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




addBookToLibrary('Titanic', 'Wesley Cho');
addBookToLibrary('Moby Dick', 'Eddie Huynh');
displayLibrary(myLibrary);