import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Counter } from 'components/counter';
import Filters from './components/Filters.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
    <Filters />
  </React.StrictMode>
);
