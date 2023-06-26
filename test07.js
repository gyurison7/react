import React from 'react'
import { useState } from 'react';

function App() {

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdChangehandler = (event) => {
    setId(event.target.value)
  }
  const onPwChangehandler = (event) => {
    setPw(event.target.value)
  }
  
  return (
    <div>
      아이디 :
      <input type="text" value={id} onChange={onIdChangehandler}/>
      <br />
      비밀번호 : 
      <input type="password" value={pw} onChange={onPwChangehandler}/>
      <br />
      <button onClick={() => {
        alert(`아이디는 ${id}이고, 비밀번호는 ${pw}입니다.`);
        setId('')
        setPw('')
      }}>
        로그인
      </button>
    </div>
  )
}

export default App