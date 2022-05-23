import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { removeEntryFromData } from './utility';

function DeleteIcon({data, setData, record}) {
  
  const onClickDeleteHandler = () => {
      let filterdData = removeEntryFromData(data, record);
      setData(filterdData);
  }
  return (
    <FontAwesomeIcon icon={ faTrashAlt } onClick = {onClickDeleteHandler}/>
  )
}

export default DeleteIcon