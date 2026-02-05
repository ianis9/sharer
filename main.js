const express = require('express');

const app = express();
const PORT = 1234;

app.use(express.static('public'));

app.listen(PORT, () =>{
    console.log("Server on! Port: " + PORT);
});