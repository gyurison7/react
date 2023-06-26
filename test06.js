import React from 'react'
import { useState } from 'react';

function App() {

  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일 : {" "}
      <input
        value={fruit}
        onChange={function (event) {
          // console.log(event.target.value)
          setFruit(event.target.value)
        }}
      />
      <br /><br />
      {fruit}
    </div>
  )
}

export default App