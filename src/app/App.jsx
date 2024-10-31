// Stylesheet & Assets:
import './App.css';
import IconArrow from "../assets/images/icon-arrow.svg"

// Dependencies & Helpers:
import { useReducer, useState } from 'react';
import { getDaysInMonth } from 'date-fns';
import calculateAge from '../utils/calculateAge.js';

// Singular Components:
import Container from "../components/Container";
import Form from "../components/Form";
import Results from "../components/Results";

// Composable Components:
import Input from "../components/Input";
import Break from "../components/Break";
import Output from "../components/Output";

function App() {
  const defError = { isActive: false, message: "" }
  const [dayErr, setDayErr] = useState(defError)
  const [monthErr, setMonthErr] = useState(defError)
  const [yearErr, setYearErr] = useState(defError)

  const [date, updateDate] = useReducer((prev, next) => {
    const newDate = { ...prev, ...next }
    const errors = [false, false, false]

    // Checks if the year is lesser than 1
    if (newDate.year < 1) {
      errors[2] = true
      setYearErr({
        isActive: true,
        message: 'This field is required'
      })
    } else {
      errors[2] = false
      setYearErr(defError)
    }

    // Checks if the month is not between 1-12
    if (newDate.month > 12 || newDate.month < 1) {
      errors[1] = true
      
      if (newDate.month < 1) {
        setMonthErr({
          isActive: true,
          message: 'This field is required'
        })
      } else {
        setMonthErr({
          isActive: true,
          message: 'Must be a valid month'
        })
      }
    } else {
      errors[1] = false
      setMonthErr(defError)
    }

    // Checks if the day is not between 1-31
    if (newDate.day > 31 || newDate.day < 1) {
      errors[0] = true
      
      if (newDate.day < 1) {
        setDayErr({
          isActive: true,
          message: 'This field is required'
        })
      } else {
        setDayErr({
          isActive: true,
          message: 'Must be a valid day'
        })
      }
    } else {
      // Check if the date's day is on the day range of the provided month
      if (newDate.day > getDaysInMonth(new Date(newDate.year, newDate.month - 1, 1))) {
        errors.fill(true)
        setDayErr({
          isActive: true,
          message: 'Must be a valid date'
        })
        setMonthErr({ isActive: true, message: '' })
        setYearErr({ isActive: true, message: '' })
      } else {
        errors.fill(false)
        setDayErr(defError)
        setMonthErr(defError)
        setYearErr(defError)
      }
    }

    // Checks if the date is in the future
    if (new Date(newDate.year, newDate.month - 1, newDate.day) > new Date()) { 
      errors[2] = true
      setYearErr({
        isActive: true,
        message: 'Must be in the past'
      })
    } else {
      errors[2] = false
      setYearErr(defError)
    }

    return { ...newDate, errors };
  }, {
    day: "", month: "", year: "", 
    errors: [ false, false, false ]
  })
  const age = calculateAge(date)

  return (
    <Container isUnique={true}>
      <Form>
        <Input.Root type="day" error={dayErr}>
          <Input.Label />
          <Input.Field
            getter={date.day}
            setter={e => updateDate(
              {...date, day: e.target.value}
            )} />
          <Input.Error />
        </Input.Root>

        <Input.Root type="month" error={monthErr}>
          <Input.Label />
          <Input.Field
            getter={date.month}
            setter={e => updateDate(
              {...date, month: e.target.value}
            )} />
          <Input.Error />
        </Input.Root>

        <Input.Root type="year" error={yearErr}>
          <Input.Label />
          <Input.Field
            getter={date.year}
            setter={e => updateDate(
              {...date, year: e.target.value}
            )} />
          <Input.Error />
        </Input.Root>
      </Form>

      <Break.Root>
        <Break.Icon src={IconArrow} alt="Arrow" />
      </Break.Root>

      <Results>
        <Output value={age.years} period='year' />
        <Output value={age.months} period='month' />
        <Output value={age.days} period='day' />
      </Results>
    </Container>
  )
}

export default App;
