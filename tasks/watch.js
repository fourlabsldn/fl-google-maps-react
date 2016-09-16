// This task will start all tasks in this folder
const gulp = require('gulp');
const straw = require('./straw');

module.exports = straw.register((task) => {
  const watchTasks = straw.loadFrom(`./${task.name}`);
  const watchTaskNames = watchTasks.map(t => t.name);
  gulp.task(task.name, watchTaskNames);
});
