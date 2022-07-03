require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const todoRoute = require('./routes/index');
const PORT = processs.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use('/api/todos', todoRoute);

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => console.log('Server is running on port ' + PORT));