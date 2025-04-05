const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')

router.post('/',TaskController.createTask);
router.get('/', TaskController.getTask);
router.get('/by-date', TaskController.getTaskbyDate);

module.exports = router