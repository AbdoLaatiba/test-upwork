const express = require("express");
const app = express();
const port = 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.render('pages/index');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
