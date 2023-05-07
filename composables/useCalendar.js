const hashWeek = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
}

export default function getCalendarMonth(month, year) {
  const startDate = new Date(year, month - 1, 1);
  const startDayOfWeek = startDate.getDay();
  const endDate = new Date(year, month, 0);
  const endDayOfWeek = endDate.getDay();
  const daysToSubtract = startDayOfWeek;
  const daysToAdd = 6 - endDayOfWeek;
  const calendarStartDate = new Date(startDate.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));
  const calendarEndDate = new Date(endDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
  const calendarItems = {};

  for (let currentDate = calendarStartDate; currentDate <= calendarEndDate; currentDate.setDate(currentDate.getDate() + 1)) {
    const dayOfWeek = hashWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();

    if (!calendarItems[dayOfWeek]) {
      calendarItems[dayOfWeek] = [];
    }

    if (!calendarItems[dayOfWeek]) {
      calendarItems[dayOfWeek] = [];
    }

    const fullDate = formaterDayForAAAA_MM_DD(currentDate)
    calendarItems[dayOfWeek].push({ day: dayOfMonth, fullDate });
  }

  return calendarItems;
}