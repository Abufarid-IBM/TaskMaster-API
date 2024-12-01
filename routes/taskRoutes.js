// taskRoutes.js
const express = require('express');
const { addTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// POST route to add a new task
router.post('/', addTask);
//router.post('/task', auth, createTask);
//router.get('/tasks', auth, getTasks);

module.exports = router;