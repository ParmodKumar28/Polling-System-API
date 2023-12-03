// All questions routes is here.
// Imports
import express from 'express';

// Create router
const questionRouter = express.Router();

// Routes
questionRouter.post('/create');
questionRouter.post('/:id/options/create');
questionRouter.delete('/:id/delete');
questionRouter.get('/:id');

// Export route
export default questionRouter;