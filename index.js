// Importing dotenv
import './dotenv.js'

// Imports
import express from 'express';

// Routers imported
import questionRouter from './src/features/question/routes/question.routes.js';
import optionRouter from './src/features/option/routes/option.routes.js';

// Creating server
const app = express();

// Parsing data middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/questions', questionRouter);
app.use('/api/options', optionRouter);


// Server listening.
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is listening on localhost: ${PORT}`);
})