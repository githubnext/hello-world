// define the contact interface
export interface Contact {
  name: string;
  email: string;
  phone: string;
}

// create an array of contacts
let contacts: Contact[] = [];

// export a function to get the contacts array
export function getContacts() {
  return contacts;
}

// export a function to add a contact to the array
export function addContact(contact: Contact) {
  contacts.push(contact);
}

// export a function to delete a contact from the array
export function deleteContact(index: number) {
  contacts.splice(index, 1);
}

// export a function to edit a contact in the array
export function editContact(index: number, contact: Contact) {
  contacts[index] = contact;
}
