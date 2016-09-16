const taskName = require('path').parse(__filename).name;
module.exports = taskName;

const gulp = require('gulp');
const transpileReact = require('../transpile-react');
const organiser = require('gulp-organiser');

module.exports = organiser.register((task) => {
  const src = [transpileReact.tasks[0].watch, ...transpileReact.src];
  gulp.task(task.name, () => gulp.watch(src, [transpileReact.name]));
});
