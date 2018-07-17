import React from 'react';
import { getDate } from '../utils/helpers';

function DayItem (props) {
  const date = getDate(props.day.dt);
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

export default DayItem;