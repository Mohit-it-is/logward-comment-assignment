import React, { useState } from 'react'

function Sort({onSortData}) {
  const [sortType, setShortType] = useState('des');

  const onClickSortHandler = () => {
    setShortType(sortType === 'des' ? 'asc' : 'des');
    onSortData();
  }
  
  return (
    <div className='sort-container'>
        <span>Sort by:</span>
        <span className='date_time_sort' onClick = {onClickSortHandler}>{" Date and Time"}</span>
        {sortType === 'des' ? <span>&darr;</span> : <span>&uarr;</span> }
    </div>
  )
}

export default Sort