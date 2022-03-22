const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const route = require('./router/route.js')
const connectDB = require('./dbConnect/db.js')
const route2 = require('./router/productrouter.js')
const port = process.env.port;
const url = process.env.url;

app.use(express.json());
app.use('/', route);
app.use('/api', route2);
connectDB(url);

app.listen(port, () => {
    console.log('server is running');
})