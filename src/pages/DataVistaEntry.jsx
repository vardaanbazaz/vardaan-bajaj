import React from 'react';
import DossierLayout from '../layouts/DossierLayout';
import { dataVistaSections } from './DataVistaContent';

export default function DataVistaEntry() {
  return <DossierLayout sections={dataVistaSections} />;
}
