import React from 'react';
import {connect} from 'react-redux';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

// Relied on stackoverflow for assistance understanding connect for redux
// https://stackoverflow.com/questions/41021369/how-to-use-connect-from-react-redux
function mapAddedToProps(state) {
  return {car: state.car};
};

export default connect(mapAddedToProps)(AddedFeatures);
