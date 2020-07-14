import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// Relied on stackoverflow for assistance understanding connect for redux
// https://stackoverflow.com/questions/41021369/how-to-use-connect-from-react-redux
function mapAddlToProps(state) {
  return {additionalFeatures: state.additionalFeatures};
};

export default connect(mapAddlToProps)(AdditionalFeatures);
