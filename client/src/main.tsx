import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './../src/asset/js/script.js';


const root = createRoot(document.getElementById('renderer'));

root.render(<>Hello world! React!</>);
