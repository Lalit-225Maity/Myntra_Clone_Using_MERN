const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const connectDb=require('./db/db');
connectDb();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running at ${port}`);

})