import React, { useState, useEffect } from 'react';
// import '@fortawesome/fontawesome-free/css/all.css';
import './stylecss.css';
import SearchFilters from './searchFilter';
import CardWithImage from './cardWithImag';
import MapComponent from './MapComponent';

const YourPageComponent = () => {
  // Logique et état pour le composant principal

  return (
    <div>
      {/* JSX pour le composant principal */}
      <SearchFilters />
      <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/3">
      <MapComponent/>
      </div>
      
      <CardWithImage />
      
      </div>
    </div>
  );
};

export default YourPageComponent;
