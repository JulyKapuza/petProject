import flatpickr from "flatpickr";
// const flatpickr = require("flatpickr");

const step = document.querySelector('.flatpickr-minute');
console.log(step);

flatpickr("#clock", {
    enableTime: true,
        noCalendar: true,
        enableSeconds: false, 
        time_24hr: false, 
        dateFormat: "H:i", 
        defaultHour: 11,
        // defaultMinute: 00,
        minTime: "11:00",
    maxTime: "23:00",
    minuteIncrement: 30,
});

flatpickr("#calendar", {
    minDate: "today",
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});