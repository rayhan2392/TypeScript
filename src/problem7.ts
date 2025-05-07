enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day <= 4) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}
