import React from 'react';
import { buyCake } from '../redux/cakes/cakeActions';
import { connect } from 'react-redux';

function CakeContainer(props) {

  const handleButtonClick = () => {
    props.buyCake()
  }
  return (
    <div>
      <h2>Number Of Cakes - {props.noOfCakes}</h2>
      <button onClick={() => handleButtonClick()}>Buy Cake</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    noOfCakes: state.cake.noOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);