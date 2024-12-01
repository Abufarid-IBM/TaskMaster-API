const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const router = express.Router();
const Task = require('./models/Task'); // Assuming you have a Task model
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.use(express.static('public'));

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to TaskMaster API');
  });
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/* POST route to create a new task
router.post('/api/tasks', async (req, res) => {
    try {
      const { title, description, deadline, priority } = req.body;
  
      // Create a new task
      const task = new Task({
        title,
        description,
        deadline,
        priority,
      });
  
      // Save the task to the database
      await task.save();
  
      // Return success response
      res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create task' });
    }
  });
  
  module.exports = router;*/
