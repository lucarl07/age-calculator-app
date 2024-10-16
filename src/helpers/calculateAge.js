import { intervalToDuration } from "date-fns";

const calculateAge = (day, month, year) => {
  if (day == 0 || month == 0 || year == 0) {
    return { years: 0, months: 0, days: 0 }
  }

  const age = intervalToDuration({
    start: new Date(year, month-1, day),
    end: new Date()
  })

  return {
    years: age.years,
    months: age.months,
    days: age.days
  }
}

export default calculateAge;