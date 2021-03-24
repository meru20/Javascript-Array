//import {useState} from 'react';
 const Arrays = () => {

const newArray = (arraySize,valueToPass)=>{
    
   
//const a = new Array(arraySize);
let a =[];

for (let i = 0; i < arraySize; i++){

  a.push(valueToPass);
}
return a;
  
}
newArray(3,'apple');

 return (
        <div className='row'>
        <div className='col-6 offset-3'>
          <h3>the new array is{JSON.stringify(newArray(3,'apple'))} </h3>
        </div>
      </div>

    )
    
  }
  export default Arrays;