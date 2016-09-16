const gulp = require('gulp');
const watch = require('./watch');
const runKeystone = require('./run-keystone');
const build = require('./build');
const straw = require('./straw');

const tasks = [build, watch, runKeystone].map(t => t.name);

module.exports = straw.register((task) => {
  gulp.task(task.name, tasks);
});
