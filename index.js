const express = require('express');
const cors = require('cors');
const UserRouter = require('./routes/UserRouter');

const app = express();

app.use(express.json());
app.use(cors());


app.use('/user', UserRouter);


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});