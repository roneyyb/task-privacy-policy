const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).send("Home page");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Application started on port 3000");
})