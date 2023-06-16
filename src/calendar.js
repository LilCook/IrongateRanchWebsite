import React from 'react';
import './calendar.css';
import CalendarPicture from './calendar.png';

function Calendar() {
  return (
    <div className="CalendarContainer">
      <img src={CalendarPicture} alt="Calendar" className="CalendarImage" />
    </div>
  );
}

export default Calendar;
