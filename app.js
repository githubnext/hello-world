// Define a fake contacts API URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Define a function to fetch all contacts from the API and display them in a table
const fetchContacts = async () => {
  try {
    // Get the table element and the loading message element
    const table = document.getElementById("contacts-table");
    const loading = document.getElementById("loading");

    // Show the loading message and hide the table
    loading.style.display = "block";
    table.style.display = "none";

    // Clear the table body
    table.tBodies[0].innerHTML = "";

    // Fetch the contacts data from the API
    const response = await fetch(API_URL);
    const data = await response.json();

    // Loop through the data and create a table row for each contact
    data.forEach((contact) => {
      // Create a table row element
      const tr = document.createElement("tr");

      // Create table cell elements for each contact property
      const idTd = document.createElement("td");
      idTd.textContent = contact.id;
      const nameTd = document.createElement("td");
      nameTd.textContent = contact.name;
      const emailTd = document.createElement("td");
      emailTd.textContent = contact.email;
      const phoneTd = document.createElement("td");
      phoneTd.textContent = contact.phone;

      // Create table cell elements for the edit and delete buttons
      const editTd = document.createElement("td");
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "edit-btn";
      editBtn.addEventListener("click", () => editContact(contact.id)); // Add an event listener to call the editContact function
      editTd.appendChild(editBtn);

      const deleteTd = document.createElement("td");
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => deleteContact(contact.id)); // Add an event listener to call the deleteContact function
      deleteTd.appendChild(deleteBtn);

      // Append the table cell elements to the table row element
      tr.appendChild(idTd);
      tr.appendChild(nameTd);
      tr.appendChild(emailTd);
      tr.appendChild(phoneTd);
      tr.appendChild(editTd);
      tr.appendChild(deleteTd);

      // Append the table row element to the table body element
      table.tBodies[0].appendChild(tr);
    });

    // Hide the loading message and show the table
    loading.style.display = "none";
    table.style.display = "block";
  } catch (error) {
    // Handle any errors
    console.error(error);
    alert("Something went wrong while fetching the contacts");
  }
};

// Define a function to create a new contact using the API and the form inputs
const createContact = async () => {
  try {
    // Get the form element and the inputs
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");

    // Get the values from the inputs
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    // Validate the inputs
    if (!name || !email || !phone) {
      alert("Please fill in all the fields");
      return;
    }

    // Create an object with the contact data
    const contact = {
      name,
      email,
      phone,
    };

    // Send a POST request to the API with the contact data
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();

    // Check if the response is successful
    if (response.ok) {
      // Show a success message
      alert("Contact created successfully");

      // Clear the form inputs
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";

      // Close the form modal
      form.style.display = "none";

      // Fetch the contacts again to update the table
      fetchContacts();
    } else {
      // Show an error message
      alert("Something went wrong while creating the contact");
    }
  } catch (error) {
    // Handle any errors
    console.error(error);
    alert("Something went wrong while creating the contact");
  }
};

// Define a function to edit an existing contact using the API and the form inputs
const editContact = async (id) => {
  try {
    // Get the form element and the inputs
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");

    // Show the form modal
    form.style.display = "block";

    // Fetch the contact data from the API by id
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    // Populate the form inputs with the contact data
    nameInput.value = data.name;
    emailInput.value = data.email;
    phoneInput.value = data.phone;

    // Add an event listener to the form submit button to update the contact
    form.addEventListener("submit", async (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the updated values from the inputs
      const name = nameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;

      // Validate the inputs
      if (!name || !email || !phone) {
        alert("Please fill in all the fields");
        return;
      }

      // Create an object with the updated contact data
      const contact = {
        name,
        email,
        phone,
      };

      // Send a PUT request to the API with the contact data
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      const data = await response.json();

      // Check if the response is successful
      if (response.ok) {
        // Show a success message
        alert("Contact updated successfully");

        // Clear the form inputs
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";

        // Close the form modal
        form.style.display = "none";

        // Fetch the contacts again to update the table
        fetchContacts();
      } else {
        // Show an error message
        alert("Something went wrong while updating the contact");
      }
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    alert("Something went wrong while editing the contact");
  }
};

// Define a function to delete an existing contact using the API and the id
const deleteContact = async (id) => {
  try {
    // Confirm the deletion
    const confirm = window.confirm("Are you sure you want to delete this contact?");

    // If confirmed, send a DELETE request to the API with the id
    if (confirm) {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      // Check if the response is successful
      if (response.ok) {
        // Show a success message
        alert("Contact deleted successfully");

        // Fetch the contacts again to update the table
        fetchContacts();
      } else {
        // Show an error message
        alert("Something went wrong while deleting the contact");
      }
    }
  } catch (error) {
    // Handle any errors
    console.error(error);
    alert("Something went wrong while deleting the contact");
  }
};

// Define a function to authenticate the user with Azure AD B2C
const authenticate = async () => {
  try {
    // Get the login button and the logout button elements
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    // Define the Azure AD B2C configuration parameters
    const config = {
      auth: {
        clientId: "<your-client-id>", // Replace with your client id
        authority: "<your-authority>", // Replace with your authority
        redirectUri: "<your-redirect-uri>", // Replace with your redirect uri
      },
      cache: {
        cacheLocation: "sessionStorage", // Use session storage to store tokens
        storeAuthStateInCookie: false, // Do not store auth state in cookies
      },
    };

    // Create a new instance of the MSAL library with the config
    const msalInstance = new msal.PublicClientApplication(config);

    // Define the request parameters
    const request = {
      scopes: ["openid", "profile"], // Request the openid and profile scopes
    };

    // Check if the user is already logged in
    const accounts = msalInstance.getAllAccounts();

    if (accounts.length > 0) {
      // If the user is logged in, show the logout button and hide the login button
      logoutBtn.style.display = "block";
      loginBtn.style.display = "none";

      // Add an event listener to the logout button to sign out the user
      logoutBtn.addEventListener("click", () => {
        msalInstance.logout();
      });
    } else {
      // If the user is not logged in, show the login button and hide the logout button
      loginBtn.style.display = "block";
      logoutBtn.style.display = "none";

      // Add an event listener to the login button to sign in the user
      loginBtn.addEventListener("click", async () => {
        try {
          // Call the loginPopup method of the MSAL library with the request
          const response = await msalInstance.loginPopup(request);

          // If the response is successful, show the logout button and hide the login button
          if (response) {
            logoutBtn.style.display = "block";
            loginBtn.style.display = "none";

            // Add an event listener to the logout button to sign out the user
            logoutBtn.addEventListener("click", () => {
              msalInstance.logout();
            });
          }
        } catch (error) {
          // Handle any errors
          console.error(error);
          alert("Something went wrong while logging in");
        }
      });
    }
  } catch (error) {
    // Handle any errors
    console.error(error);
    alert("Something went wrong while authenticating");
  }
};

// Call the authenticate function when the window loads
window.addEventListener("load", authenticate);

// Call the fetchContacts function when the window loads
window.addEventListener("load", fetchContacts);

// Get the create button and the form elements
const createBtn = document.getElementById("create-btn");
const form = document.getElementById("contact-form");
const closeBtn = document.getElementById("close-btn");

// Add an event listener to the create button to show the form modal
createBtn.addEventListener("click", () => {
  form.style.display = "block";
});

// Add an event listener to the close button to hide the form modal
closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

// Add an event listener to the form submit button to call the createContact function
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the createContact function
  createContact();
});
