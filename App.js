/***
 *
 * Created A Server
 * 
 * HMR - Hot Module Replacement   - Hot Module Replacement (HMR) improves the development experience  by  automatically updating modules in the browser at runtime without needing a whole page refresh.
 * 
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code and removing console.log
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development  -  reduce the timing 
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number manages by parcel in .parcel-cache
 * Consistent Hashing Algorithm
 * Zero Config
 * Transitive Dependencies - when some dependencies are dependent upon another dependencies.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 kkk"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(container);