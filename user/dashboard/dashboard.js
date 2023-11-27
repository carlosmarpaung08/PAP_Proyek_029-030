let currentSlide = 0;
const slides = document.querySelectorAll('.slider-img');

function showSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

window.addEventListener('load', () => {
    showSlide(currentSlide);
});

// Get the current date
var currentDate = new Date();

// Function to generate a calendar for the current month
function generateCalendar() {
    // Get the reference to the calendar container
    var calendarContainer = document.getElementById('calendar-container');

    // Create a table element
    var calendarTable = document.createElement('table');

    // Create a header row with month name and day names
    var monthYearRow = calendarTable.createTHead().insertRow();
    var monthYearCell = monthYearRow.insertCell();
    monthYearCell.colSpan = 7; // Span across all days
    monthYearCell.textContent = currentDate.toLocaleString('en-us', { month: 'long', year: 'numeric' });

    // Add a style for the background color of the month name cell
    monthYearCell.style.backgroundColor = '#f4f4f4'; // Use the desired gray color
    monthYearCell.style.color = '#000'; // Set the text color to black
    monthYearCell.style.fontWeight = 'bold'; // Make the text bold

    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var headerRow = calendarTable.createTHead().insertRow();
    daysOfWeek.forEach(function (day) {
        var cell = headerRow.insertCell();
        cell.textContent = day;
    });

    // Create a body for the calendar
    var calendarBody = calendarTable.createTBody();

    // Get the first day of the month
    var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    var startingDay = firstDay.getDay();

    // Get the number of days in the month
    var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Create rows and cells for the calendar
    var dayCounter = 1;
    for (var i = 0; i < 6; i++) {
        var row = calendarBody.insertRow();

        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell();

            if (i === 0 && j < startingDay) {
                // Add empty cells before the first day of the month
                cell.textContent = '';
                cell.classList.add('other-month');
            } else if (dayCounter <= daysInMonth) {
                // Add cells with the day number
                cell.textContent = dayCounter;

                // Highlight the current day
                if (dayCounter === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth()) {
                    cell.classList.add('today');
                }

                dayCounter++;
            } else {
                // Add cells with the day number for the next month
                cell.textContent = '';
                cell.classList.add('other-month');
            }
        }
    }

    // Clear the previous calendar content
    calendarContainer.innerHTML = '';

    // Append the calendar table to the container
    calendarContainer.appendChild(calendarTable);
}
// Call the function to generate the calendar
generateCalendar();

