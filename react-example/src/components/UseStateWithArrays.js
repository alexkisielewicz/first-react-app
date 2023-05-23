import React, {useState} from 'react'

function UseStateWithArrays() {
  const [nums, setNums] = useState([1,2,3])
  
  const addNums = () => {
    setNums([...nums, nums.length + 1]);
  }

  const removeNum = () => {
    setNums(
      nums.filter((item, idx) => {
        console.log(item, idx)
        return idx !== nums.length - 1;
      })
    )
  }
  
  return (
    <div>
      <button onClick={addNums}>Add item</button>
      <button onClick={removeNum}>Remove item</button>
      <ul>
        {nums.map(num => <li key={num}>{num}</li>)}
      </ul>
    </div>
  )
}

export default UseStateWithArrays