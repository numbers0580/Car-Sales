import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

// Relied on stackoverflow for assistance understanding connect for redux
// https://stackoverflow.com/questions/41021369/how-to-use-connect-from-react-redux
function mapStateToProps(state) {
  return {car: state.car};
};

export default connect(mapStateToProps)(Header);
