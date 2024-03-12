// Import a web framework, such as Express
const express = require("express");
// Create a server
const app = express();
// Serve static files from the profile directory
app.use(express.static("profile"));
// Add a route that responds with the profile page when requested
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/profile/index.html");
});
// Listen on a port, such as 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
