const DuplicateArray =()=>{
    let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
    let uniqueChars = [...new Set(duplicateArray)];
    return(
        <div className='row'>
        <div className='col-6 offset-3'>
          <h3>The filtered array with out the duplicated values is {JSON.stringify(uniqueChars)}</h3>
        </div>
      </div>

    )
}
export default DuplicateArray;