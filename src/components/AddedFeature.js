import React from 'react';
import {remFeature} from '../actions/carActions'
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.remFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {remFeature})(AddedFeature);