import {useState} from 'react';
import Arrays from './Array';
import ReverseArray from './ReverseArray';
import FalsyValues from'./FalsyValues';
import DuplicateArray from './DuplicateAray';
import './App.css';

const App =()=> {
  const [array, setArray]=useState([]);
  //const [reverseArray, setReverseArray]=useState([1,2,3])
  
  // const newArray = (x,y) => {
  //   let arr = new Array(x);
  //   console.log('x-',arr.length)

    // array.length=x;
    // for (let i = 0; i < array.length; i++){
    //   array.push(y)
    //   console.log('array',array);
    // }
    // setArray(array);
    //array.length++;
    // for (let i = 0; i < x; i++) {
    //   const z=[1,2,3]
    //   //array.push([y]);
    //   console.log('y',z);
      
     
  
  //setArray([...array,y]);
   //setArray({array})
  //console.log('array',array);

  
  return (
    <div className='container '>
       <div className='row text-center'>
         <div className='col'>
           <h1>Coding Challenge: Javascript Arrays 3.24.21 </h1>
         </div>
         </div>
      <Arrays />
      <ReverseArray />
      <FalsyValues/>
      <DuplicateArray/>
    </div>
    
  );
}

export default App;
