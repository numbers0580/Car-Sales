import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  //Moved the const below to reducer.js
  /*
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  */

  return (
    // This was the default code provided, but I was getting a lot of errors from it after a while
    // <div className="boxes">
    //   <div className="box">
    //     <Header car={state.car} />
    //     <AddedFeatures car={state.car} />
    //   </div>
    //   <div className="box">
    //     <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
    //     <Total car={state.car} additionalPrice={state.additionalPrice} />
    //   </div>
    // </div>

    // Found that I had to remove all the state objects to clear out the errors. Preserving original code above to use as a reference for later projects.
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
