/**
 * Author: Renaudo Bruno, Agustín
 * Date: 15/07/22
 * Comments: You can create an 'user' without a company, later you can update that property,
 *  also you can create it with a previously created company.
 */

require('dotenv').config({
    path: `src/config/.env`
});

const express     = require('express');
const mongoose    = require('mongoose');
const dataBaseURL = process.env.DATABASE_URL;

mongoose.connect(dataBaseURL);
const database = mongoose.connection;

database.on('error', (e) => {
    console.error(`\nDatabase error: ${e}\n`);
});

database.once('connected', () => {
    console.log('\n----> Successful connection to database <----\n');
});

const app = express();
app.use(express.json());

const routes = require('../routes/routes');
app.use('/', routes);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`\nServer running on: http://${process.env.HOST}:${process.env.PORT}`);
})