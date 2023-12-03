// Importing dotenv
import './dotenv.js'

// Imports
import express from 'express';

// Creating server
const app = express();

// Parsing data middleware
app.use(express.urlencoded({ extended: true }));

// Routes


// Server listening.
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is listening on localhost: ${PORT}`);
})