import { 
  differenceInYears, 
  differenceInMonths, 
  differenceInDays 
} from "date-fns";

const calculateAge = (day, month, year) => {
  // Initial values:
  const today = new Date();
  const birthdate = new Date(year, month, day)

  // Age values:
  const ageYears = differenceInYears(birthdate, today)
  const ageMonths = differenceInMonths(today, birthdate) % 12;
  const ageDays = differenceInDays(
    today,
    new Date(today.getFullYear(), today.getMonth(), birthdate.getDate())
  );

  // Final object:
  return {
    years: ageYears,
    months: ageMonths,
    days: ageDays
  }
}

export default calculateAge;