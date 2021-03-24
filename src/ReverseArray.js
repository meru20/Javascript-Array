const ReverseArray =()=>{
    let myArray = ["A","B","C"] 
    
    const newArray = myArray.reduceRight((accumulator, value) => {
        accumulator.push(value);
        return accumulator;
      }, []);
      
    return(
       
        
          <h3>The Reversed array is {JSON.stringify(newArray)}</h3>
        
     

    )
}
export default ReverseArray;