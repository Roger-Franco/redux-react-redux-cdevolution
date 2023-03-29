import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyIceCream} from '../redux'

export const HooksIceCreamContainer = () => {
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  console.log(numOfIceCream);
  return (
    <div>
      <h2>Num of icecreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  )
}
