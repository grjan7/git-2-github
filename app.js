const express = require('express');
const app = express();

//index page
app.get("/", (req, res) => {
  res.sendFile("./index.html");
}).listen(3000, () => {
  console.log(`Server is listening on port 3000 at http://localhost:3000`)
}
);
