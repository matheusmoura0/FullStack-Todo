require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const todoRoute = require('./routes/index');
const PORT = 3300 || processs.env.PORT;

app.use(cors())
app.use(express.json());
app.use('/api/todos', todoRoute);


app.listen(PORT, () => console.log('Server is running on port ' + PORT));