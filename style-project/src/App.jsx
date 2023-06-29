import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './component/Button';
import User from './component/User';

function App() {
  // const users = [
  //   {id:1 , age:30, name:'송중기'},
  //   {id:2 , age:24, name:'송강'},
  //   {id:3 , age:21, name:'김유정'},
  //   {id:4 , age:29, name:'구교환'},
  // ]

  const [users, setUsers] = useState([
    {id:1 , age:30, name:'송중기'},
    {id:2 , age:24, name:'송강'},
    {id:3 , age:21, name:'김유정'},
    {id:4 , age:29, name:'구교환'},
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  // 추가 버튼
  const addButtonhandeler = () => {
    const newUser = {
      id: users.length +1, 
      age: age, 
      name: name,
    }
    setUsers([...users, newUser]) // 배열을 풀어서 추가한다.
  }

  // 삭제 버튼
  const deleteButtonHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }
  
  return (
    <div>
      <div>
        이름 : <input value={name} onChange={nameChangeHandler}/>
        <br/>
        나이 : <input value={age} onChange={ageChangeHandler}/>
        <br/>
        < Button addButtonhandeler={addButtonhandeler}/>
      </div>
      <div className="app-style">
        {users.map((item)=>( <User key={item.id} item={item} deleteButtonHandler={deleteButtonHandler}/> ))}
      </div>
    </div>
  );
}

export default App;


// =========================================================================
// function App() {
//   const testArr = ['감자','고구마','오이','가지','옥수수']
  
//   return (
//     <div className='app-style'>
//       {/* {
//         testArr.map((item)=>(<div className='squre-style'>{item}</div>))
//       } */}

//       {
//         testArr.filter((item)=>{
//           return item !== '오이'
//         }).map((item)=>(<div className='squre-style'>{item}</div>))
//       }
//     </div>
//   );
// }
