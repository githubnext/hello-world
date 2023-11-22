// fetch and display contact list
function listContacts() {
  fetch("contacts.json")
    .then(response => response.json())
    .then(data => {
      let table = document.createElement("table");
      let header = document.createElement("tr");
      let nameHeader = document.createElement("th");
      let emailHeader = document.createElement("th");
      let phoneHeader = document.createElement("th");
      let actionsHeader = document.createElement("th");
      nameHeader.textContent = "Name";
      emailHeader.textContent = "Email";
      phoneHeader.textContent = "Phone";
      actionsHeader.textContent = "Actions";
      header.append(nameHeader, emailHeader, phoneHeader, actionsHeader);
      table.append(header);
      for (let contact of data) {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        let emailCell = document.createElement("td");
        let phoneCell = document.createElement("td");
        let actionsCell = document.createElement("td");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");
        nameCell.textContent = contact.name;
        emailCell.textContent = contact.email;
        phoneCell.textContent = contact.phone;
        editButton.textContent = "Edit";
        deleteButton.textContent = "Delete";
        editButton.classList.add("edit-button");
        deleteButton.classList.add("delete-button");
        editButton.addEventListener("click", () => editContact(contact.id));
        deleteButton.addEventListener("click", () => deleteContact(contact.id));
        actionsCell.append(editButton, deleteButton);
        row.append(nameCell, emailCell, phoneCell, actionsCell);
        table.append(row);
      }
      let container = document.getElementById("container");
      container.innerHTML = "";
      container.append(table);
    })
    .catch(error => console.error(error));
}

// handle button click event
let listButton = document.getElementById("list-button");
listButton.addEventListener("click", listContacts);

// navigate to contact list page
function goToContactList() {
  window.location.href = "contact-list.html";
}

// edit contact
function editContact(id) {
  // TODO: implement logic to edit contact
  console.log("Editing contact with id " + id);
}

// delete contact
function deleteContact(id) {
  // TODO: implement logic to delete contact
  console.log("Deleting contact with id " + id);
}
