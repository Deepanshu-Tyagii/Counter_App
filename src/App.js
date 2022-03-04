import { useState } from 'react';
import './App.css'
 
function App() {
  const [count, setCount]= useState(0);

  return (
    <>
    <div className= "container">
      <div classname="items">
        <span className='count'>{count}</span><span>Items</span>
      </div>
      <div>
        <button className= "reset" onClick={()=> setCount(0)}>Reset</button>
      </div>
      <div className="buttons">
        <div>
        <button className="zero">Zero</button>
        <button className="inc" onClick={()=> setCount(count+1)}>+</button>
        <button className="decrease" onClick={()=> setCount(count-1)} disabled={count===0}>-</button>
        <button className='del'>DEL</button>
      </div>
      <div>
      <button className="zero">Zero</button>
        <button className="inc" onClick={()=> setCount(count+1)}>+</button>
        <button className="decrease" onClick={()=> setCount(count-1)} disabled={count===0}>-</button>
        <button className='del'>DEL</button>
      </div>
      <div>
      <button className="zero">Zero</button>
        <button className="inc" onClick={()=> setCount(count+1)}>+</button>
        <button className="decrease" onClick={()=> setCount(count-1)} disabled={count===0}>-</button>
        <button className='del'>DEL</button>
      </div>
      <div>
      <button className="zero">Zero</button>
        <button className="inc" onClick={()=> setCount(count+1)}>+</button>
        <button className="decrease" onClick={()=> setCount(count-1)} disabled={count===0}>-</button>
        <button className='del'>DEL</button>
      </div>
  
      </div>
    </div>

    </>
  )
  
}

export default App;
