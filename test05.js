import React from 'react'
import { useState } from 'react';

function App() {

  const [name, setName] = useState('김할아버지');
  return (
    <div>
      {name}
      <br/>
      <button onClick={function(){
        setName('박할아버지')
      }}>클릭</button>
    </div>
  )
}

export default App