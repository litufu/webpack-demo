import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';

  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}


let element = component()
document.body.appendChild(element);

if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
     document.body.removeChild(element);
     element = component();
     document.body.appendChild(element);
   })
 }
