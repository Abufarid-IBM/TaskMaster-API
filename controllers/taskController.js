const Task = require('../models/Task');

// Controller to handle adding a new task
const addTask = async (req, res) => {
  try {
    const { title, description, deadline, priority } = req.body;

    // Validate required fields
    if (!title || !description || !deadline || !priority) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create and save the task
    const task = new Task({ title, description, deadline, priority });
    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { addTask };
/*exports.createTask = async (req, res) => {
  const { title, description, deadline, priority } = req.body;

  try {
    const task = new Task({
      user: req.user.id,
      title,
      description,
      deadline,
      priority,
    });

    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};*/