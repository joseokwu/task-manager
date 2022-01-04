const express = require('express');
const router = express.Router();
const {
  getTask,
  postTasks,
  getTasks,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getTasks).post(postTasks);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
