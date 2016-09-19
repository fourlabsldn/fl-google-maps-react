// List all available tasks
const path = require('path');
const organiser = require('gulp-organiser');

const srcRoot = './src';
const destRoot = './dest';
const externalDependencies = ['react', 'react-dom', 'fl-google-maps-react'];

organiser.registerAll('./tasks', {
  'transpile-react': {
    module: {
      src: path.join(srcRoot, 'js/index.js'),
      dest: destRoot,
      watch: path.join(srcRoot, 'js/**'),
      config: { external: externalDependencies, format: 'umd', moduleName: 'fl-google-maps-react' },
    },
    demo: {
      src: path.join(srcRoot, 'js/demo.js'),
      dest: './example',
      watch: path.join(srcRoot, 'js/**'),
      config: { external: externalDependencies, format: 'umd', moduleName: 'example' },
    },
  },
  'browser-sync': {
    src: '.', // it doesn't matter, it's just so the task object is not ignored.
    reloadOn: ['transpile-react'],
  },
});
