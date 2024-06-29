import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCreame } from '../redux/iceCreams/iceCreameActions';

function HooksIceCreamContainer(props) {
  const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)// to fetch the store data
  const dispatch = useDispatch()// to dispatch the actions to the store

  const handleButtonClick = () => {
    dispatch(buyIceCreame())
  }
  return (
    <div>
      <h2>Number Of Ice Creams - {noOfIceCreams}</h2>
      <button onClick={() => handleButtonClick()}>Buy Ice Creame</button>
    </div>
  );
}

export default HooksIceCreamContainer;