const gulp = require('gulp');
const depLinker = require('dep-linker');

const straw = require('./straw');

module.exports = straw.register((task) => {
  gulp.task(task.name, () => depLinker.linkDependenciesTo(task.dest));
});
