const gulp = require('gulp');
const sass = require('../sass');
const straw = require('../straw');

module.exports = straw.register((task) => {
  gulp.task(task.name, () => gulp.watch(sass.src, [sass.name]));
});
