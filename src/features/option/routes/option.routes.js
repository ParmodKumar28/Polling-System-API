// All routes of options are here.
// Imports
import express from 'express';

// Create route
const optionRouter = express.Router();

// Routes
optionRouter.delete('/:id/delete');
optionRouter.get('/:id/add_vote');

// Export route
export default optionRouter;