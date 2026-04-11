const express = require('express');
const app = express();
app.use(express.json());
const cookieparser=require('cookie-parser');
app.use(cookieparser())
const dotenv = require('dotenv');
dotenv.config();
const connectDb=require('./db/db');
connectDb();
const items=require('./Router/router');
app.use('/api',items);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running at ${port}`);

})