import React from 'react';
import {connect} from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// Relied on stackoverflow for assistance understanding connect for redux
// https://stackoverflow.com/questions/41021369/how-to-use-connect-from-react-redux
function mapTotalToProps(state) {
  return {car: state.car, additionalPrice: state.additionalPrice};
};

export default connect(mapTotalToProps)(Total);
