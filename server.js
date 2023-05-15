const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./api/routes/studentRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
