//import {useState} from 'react';
// const Arrays = () => {
  const newArray = (arraySize,valueToPass)=>{
    
   
const a = new Array(arraySize);

for (let i = 0; i < arraySize; i++){

  a.push(valueToPass);
  console.log('a--',a)

}


// if(Object.seal) {
//   // fill array with some value because
//   // empty slots can not be changed after calling Object.seal
//   a.fill(valueToPass);
//   console.log('a--',a)
  
  
//   // now a is a fixed-size array with mutable entries
// }

  //   array(arraySize).fill(valueToPass);
  // }
  // setArray(array);
  
  //  console.log('sizse',newArray);
  //const [array, setArray]=useState([]);
  

  //  const newArray = (arraySize,valueToPass)=>{
  //    //array.length = arraySize;
  //    //console.log('sizse',array.length);
  //   for (let i = 0; i < arraySize; i++){
  //     setArray(array => array.concat(valueToPass));
  //        //console.log('array',array);
  //      }
  //     // setArray(array => array.concat(valueToPass));  
  //  }
  

  
  newArray(3,'apple');
  

    return (
        <div className='row'>
        <div className='col-6 offset-3'>
          <h3>the new array is[{a}] </h3>
        </div>
      </div>

    )
    
  }
  export default newArray;