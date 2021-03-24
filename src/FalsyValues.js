const FalsyValues =()=>{
    let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
    dirtyArray = dirtyArray.filter(Boolean);
    return(
        <div className='row'>
        <div className='col-6 offset-3'>
          <h3>The filtered array with out the falsy values is {JSON.stringify(dirtyArray)}</h3>
        </div>
      </div>

    )

}
export default FalsyValues;