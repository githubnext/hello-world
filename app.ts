// import the contacts module
import * as contacts from "./contacts";

// get the elements from the contacts.html file
const table = document.getElementById("contacts-table") as HTMLTableElement;
const form = document.getElementById("contacts-form") as HTMLFormElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const deleteButton = document.getElementById("delete-button") as HTMLButtonElement;
const editButton = document.getElementById("edit-button") as HTMLButtonElement;

// add event listeners to the buttons
addButton.addEventListener("click", () => {
  // get the values from the form
  const name = form.elements["name"].value as string;
  const email = form.elements["email"].value as string;
  const phone = form.elements["phone"].value as string;
  // create a new contact object
  const contact = { name, email, phone };
  // add the contact to the contacts array
  contacts.addContact(contact);
  // update the table
  updateTable();
  // clear the form
  form.reset();
});

deleteButton.addEventListener("click", () => {
  // get the selected row index
  const index = getSelectedRowIndex();
  // delete the contact from the contacts array
  contacts.deleteContact(index);
  // update the table
  updateTable();
});

editButton.addEventListener("click", () => {
  // get the selected row index
  const index = getSelectedRowIndex();
  // get the values from the form
  const name = form.elements["name"].value as string;
  const email = form.elements["email"].value as string;
  const phone = form.elements["phone"].value as string;
  // create a new contact object
  const contact = { name, email, phone };
  // edit the contact in the contacts array
  contacts.editContact(index, contact);
  // update the table
  updateTable();
  // clear the form
  form.reset();
});

// update the table with the contacts array
function updateTable() {
  // clear the table body
  table.tBodies[0].innerHTML = "";
  // loop through the contacts array
  for (let i = 0; i < contacts.getContacts().length; i++) {
    // get the contact object
    const contact = contacts.getContacts()[i];
    // create a new table row
    const row = document.createElement("tr");
    // create a cell for each property
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    // set the cell text to the property value
    nameCell.textContent = contact.name;
    emailCell.textContent = contact.email;
    phoneCell.textContent = contact.phone;
    // append the cells to the row
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    // add a click event listener to the row
    row.addEventListener("click", () => {
      // select the row
      selectRow(row);
      // fill the form with the contact data
      fillForm(contact);
    });
    // append the row to the table body
    table.tBodies[0].appendChild(row);
  }
  // print the contacts array to the console
  console.table(contacts.getContacts());
}

// select a row and unselect the others
function selectRow(row: HTMLTableRowElement) {
  // get all the rows in the table body
  const rows = table.tBodies[0].rows;
  // loop through the rows
  for (let i = 0; i < rows.length; i++) {
    // check if the row is the same as the clicked one
    if (rows[i] === row) {
      // add the selected class to the row
      rows[i].classList.add("selected");
    } else {
      // remove the selected class from the row
      rows[i].classList.remove("selected");
    }
  }
}

// fill the form with the contact data
function fillForm(contact: contacts.Contact) {
  // set the form values to the contact properties
  form.elements["name"].value = contact.name;
  form.elements["email"].value = contact.email;
  form.elements["phone"].value = contact.phone;
}

// get the index of the selected row
function getSelectedRowIndex() {
  // get all the rows in the table body
  const rows = table.tBodies[0].rows;
  // loop through the rows
  for (let i = 0; i < rows.length; i++) {
    // check if the row has the selected class
    if (rows[i].classList.contains("selected")) {
      // return the index of the row
      return i;
    }
  }
  // return -1 if no row is selected
  return -1;
}
