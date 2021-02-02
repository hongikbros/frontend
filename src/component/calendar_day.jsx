import React from 'react';
import '../css/calander_day.css';

const CalendarDay = (props) => {
  //   const onDragOver = (event) => {
  //     event.preventDefault();
  //   };

  //   const onDrop = (event) => {
  //     const id = event.dataTransfer.getData('text');
  //     const companyDataElement = document.querySelector(`[data-id='${id}']`);
  //     const companyData = document.createElement('li');
  //     const dropZone = event.currentTarget;
  //     const dropZoneList = dropZone.querySelector('ul');
  //     // console.log(companyDataElement);
  //     console.log(dropZoneList);
  //     companyData.innerText = companyDataElement.innerText;
  //     dropZoneList.appendChild(companyData);

  //     event.dataTransfer.clearData();
  //     companyDataElement.style.backgroundColor = 'cornsilk';
  //   };

  const { className } = props;
  const { day } = props;

  return (
    <div className={className}>
      {day}
      {/* <ul className="calendar-day-company-list" /> */}
    </div>
  );
};

export default CalendarDay;
