import React from 'react';
import '../css/calander_day.css';

const CalendarDay = (props) => {
  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    const id = event.dataTransfer.getData('text');
    const companyDataElement = document.querySelector(`[data-id='${id}']`);
    const companyData = document.createElement('li');
    const dropZone = event.currentTarget;
    const dropZoneList = dropZone.querySelector('ul');
    // console.log(companyDataElement);
    companyData.innerText = companyDataElement.firstChild.data;
    dropZoneList.appendChild(companyData);

    event.dataTransfer.clearData();
    companyDataElement.style.backgroundColor = 'cornsilk';
  };

  const { className, day } = props;

  return (
    <div className={className} onDragOver={onDragOver} onDrop={onDrop}>
      {day}
      <ul className="calendar-day-company-list" />
    </div>
  );
};

export default CalendarDay;
