app.js
home.js
products.js       ------>  bundle.js
cart.js
css files
images

**common tasks for a tool like webpack or vite**:
1. resolution : find where the various source files live on disk
2. transformation : translate js/ts and assets into a form that 
   browser can understand
3. bundling : compile many source files into a small number of 
   js bundles, helps in easy loading
4. minify : shrink the js bundle size 
5. serve : hot reloading

Webpack builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

