// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const data = new Date(dateString)
    dayName = data.getDay() === 0 ? 'Sunday'
        : data.getDay() === 1 ? 'Monday'
            : data.getDay() === 2 ? 'Tuesday'
                : data.getDay() === 3 ? 'Wednesday'
                    : data.getDay() === 4 ? 'Thursday'
                        : data.getDay() === 5 ? 'Friday'
                            : 'Saturday'
         
    return dayName;
}