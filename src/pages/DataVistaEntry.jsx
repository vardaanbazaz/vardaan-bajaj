import React from 'react';
import ReactDOM from 'react-dom/client';
import ManuscriptLayout from '../layouts/ManuscriptLayout';
import DataVistaContent from './DataVistaContent';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManuscriptLayout>
      <DataVistaContent />
    </ManuscriptLayout>
  </React.StrictMode>
);
