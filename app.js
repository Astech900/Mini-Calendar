let daysEl = document.getElementById('days');
let dayNameEl = document.getElementById('days-name');
let monthNameEl = document.getElementById('mont-name');
let yearEl = document.getElementById('year');


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function calendar() {
    //define days
    const currentDate = new Date();
    const days = currentDate.getDate();
    daysEl.innerHTML = days;

    //define days name 
    const daysNames = daysOfWeek[currentDate.getDay()];
    dayNameEl.innerHTML = daysNames;

    //define month name
    const monthNames = monthsOfYear[currentDate.getMonth()];
    monthNameEl.innerHTML = monthNames;

    //define year
    const years = currentDate.getFullYear();
    yearEl.innerHTML = years;

};

//function-called

calendar();










