const taskName = require('path').parse(__filename).name;
module.exports = taskName;

const gulp = require('gulp');
const transpileReact = require('../transpile-react');
const straw = require('../straw');

module.exports = straw.register((task) => {
  const src = [transpileReact.tasks[0].watch, ...transpileReact.src];
  gulp.task(task.name, () => gulp.watch(src, [transpileReact.name]));
});
