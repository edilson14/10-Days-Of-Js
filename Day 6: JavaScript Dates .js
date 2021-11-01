// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const data = new Date(dateString).getDay()
    dayName = data === 0 ? 'Sunday'
        : data === 1 ? 'Monday'
            : data === 2 ? 'Tuesday'
                : data === 3 ? 'Wednesday'
                    : data === 4 ? 'Thursday'
                        : data === 5 ? 'Friday'
                            : 'Saturday'
         
    return dayName;
}