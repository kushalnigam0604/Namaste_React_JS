import React from 'react';
import ReactDOM from 'react-dom/client';

// Babel does -->  JSX => React.createElement => Object => HTML(DOM)

// React element -
const heading = (
  <h1 id='title' key='h2'>
    Namaste React
  </h1>
);

// React Component -
const HeaderComponent = () => {
  return (
    <div>
      <h2>React Component</h2>
    </div>
  )
}
   

//passing a react element inside the root
const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);
root.render(<HeaderComponent/>);


/***
 *
 * Created A Server
 * 
 * HMR - Hot Module Replacement   - Hot Module Replacement (HMR) improves the development experience  by  automatically updating modules in the browser at runtime without needing a whole page refresh.
 * 
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
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
 * 
 * 
 * Babel - converts newer code to older code for browser compatibility.
 */