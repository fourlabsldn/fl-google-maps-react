/* eslint-disable global-require */
const gulp = require('gulp');
const straw = require('./straw');
const tasks = [
  require('./copy-static'),
  require('./sass'),
  require('./transpile-react'),
  require('./link-dependencies'),
].map(t => t.name);

module.exports = straw.register((task) => {
  gulp.task(task.name, tasks);
});
