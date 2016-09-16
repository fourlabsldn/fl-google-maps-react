/* eslint-disable padded-blocks*/

// This task will start all tasks in this folder
const gulp = require('gulp');

const browserSync = require('browser-sync').create();
const organiser = require('gulp-organiser');

module.exports = organiser.register((task, allTasks) => {
  const { name, reloadOn } = task;

  gulp.task(name, () => {

    browserSync.init({
      server: { baseDir: './' },
    });

    const tasksToReloadOn = reloadOn.map(tName => allTasks.find(t => t.name === tName));
    tasksToReloadOn.forEach(t => {
      console.log('Reloading on changes at:', t.dest);
      gulp.watch(t.dest).on('change', browserSync.reload);
    });

  });
});
