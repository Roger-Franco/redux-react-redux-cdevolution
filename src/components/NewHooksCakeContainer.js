import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export function NewHooksCakeContainer (props) {
  const [number, setNumber] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <p>NewHooksCakeContaines</p>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} cake</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.cake.numOfCakes
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: (number) => dispatch(buyCake(number))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
