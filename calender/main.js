document.addEventListener("DOMContentLoaded", function() {
    // Initialize Flatpickr date picker
    flatpickr(".datepicker-input", {
        dateFormat: "Y-m-d",
        maxDate: "today"
        // Add more options here as needed
    });

    // Add event listener for form submission
    document.getElementById("submit").addEventListener("click", function(event) {
        event.preventDefault();
        var fromDate = document.getElementById("from").value;
        var toDate = document.getElementById("to").value;

        // Calculate menstrual cycle length (in days)
        var cycleLength = Math.abs(new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24);

        // Display the menstrual cycle length on the webpage
        document.getElementById("result").innerHTML = "Your menstrual cycle this month lasted " + cycleLength + " days.<br>";

        // Predict periods for next month
        var averageCycleLength = cycleLength; // You can calculate average cycle length based on historical data if available
        var nextCycleStartDate = new Date(toDate);
        nextCycleStartDate.setDate(nextCycleStartDate.getDate() + averageCycleLength);
        
        var nextPeriodStartDate = new Date(nextCycleStartDate);
        nextPeriodStartDate.setDate(nextPeriodStartDate.getDate() - 5); // Assuming period length is 5 days

        // Display predicted period dates on the webpage
        document.getElementById("result").innerHTML += "Your predicted next cycle start date: " + nextCycleStartDate.toDateString() + "<br>";
        document.getElementById("result").innerHTML += "Your predicted next period start date: " + nextPeriodStartDate.toDateString();
        document.getElementById("result").style.display = "block";
    });
});

