/* eslint-disable padded-blocks*/

// This task will start all tasks in this folder
const gulp = require('gulp');
const path = require('path');
const browserSync = require('browser-sync').create();
const organiser = require('gulp-organiser');

module.exports = organiser.register((task, allTasks) => {
  const { name, reloadOn } = task;

  gulp.task(name, () => {

    browserSync.init({
      server: {
        baseDir: './',
      },
      startPath: '/example',
    });

    const tasksToReloadOn = reloadOn.map(tName => allTasks.find(t => t.name === tName));

    tasksToReloadOn.forEach(t => {
      const globs = t.dest.map(dest => path.join(dest, '**/*'));
      console.log('Reloading on changes at:', globs);
      gulp.watch(globs).on('change', browserSync.reload);
    });

  });
});
