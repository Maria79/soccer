const WeekView = () => {
  // Get the current date
  const today = new Date();

  // Calculate the start date (3 days before today) and end date (3 days after today)
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 3);
  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 3);

  // Initialize an array to hold the days of the week
  const daysOfWeek = [];

  // Loop through the dates and add them to the array
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - 3 + i);

    daysOfWeek.push({
      date: date.toLocaleDateString(),
      dateOfMonth: date.toLocaleDateString()[0].split("/"),
      isToday: date.toDateString() === today.toDateString(),
      dayOfWeek: date.toLocaleDateString("en-UK", { weekday: "short" }), // Adjust the day order
      month: date.toLocaleDateString("en-UK", { month: "short" }),
    });
  }

  return (
    <div className="flex gap-x-3  border rounded-md">
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className={`w-24  px-1 py-2 flex items-center justify-center ${
            day.isToday ? "bg-blue-500 text-white" : ""
          }`}
        >
          <div className="flex flex-col items-center">
            <div>{day.dayOfWeek}</div>
            <div>{day.isToday ? "Today" : null}</div>

            <div>
              {day.isToday ? (
                <div>
                  {day.dateOfMonth} {day.month}
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <div>{day.dateOfMonth}</div>
                  <div>{day.month}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekView;
