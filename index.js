const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send("Home page");
});

app.listen(3000, () => {
    console.log("Application started on port 3000");
})