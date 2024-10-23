// Dependencies & Helpers:
import { useReducer, useState } from 'react';
import { getYear, getDaysInMonth } from 'date-fns';
import calculateAge from '../helpers/calculateAge.js';

// Stylesheet & Assets:
import './App.css';
import IconArrow from "../assets/images/icon-arrow.svg"

// Singular Components:
import Container from "../components/Container";
import Form from "../components/Form";
import Results from "../components/Results";

// Composable Components:
import Input from "../components/Input";
import Break from "../components/Break";
import Output from "../components/Output";

const defError = {
  isActive: false,
  message: "" 
}

function App() {
  const [dayErr, setDayErr] = useState(defError)
  const [monthErr, setMonthErr] = useState(defError)
  const [yearErr, setYearErr] = useState(defError)

  const [date, updateDate] = useReducer((prev, next) => {
    const newDate = { ...prev, ...next }
    const errors = [false, false, false, false]

    if (newDate.day > 31) {
      errors[1] = true
      setDayErr({
        isActive: true,
        message: 'Must be a valid day'
      })
    } else {
      errors[1] = false
      setDayErr(defError)
    }

    if (newDate.month > 12) {
      errors[2] = true
      setMonthErr({
        isActive: true,
        message: 'Must be a valid month'
      })
    } else {
      errors[2] = false
      setMonthErr(defError)
    }

    // Checks if the date is in the past/present
    if (
      new Date(newDate.year, newDate.month - 1, newDate.day) > new Date()
    ) {
      errors[3] = true
      setYearErr({
        isActive: true,
        message: 'Must be in the past'
      })
    } else {
      errors[3] = false
      setYearErr(defError)
    }

    return { ...newDate, errors };
  }, {
    day: "", month: "", year: "", errors: [ 
      false, false, false, false 
    ]
  })
  const age = calculateAge(date)

  return (
    <Container>
      <Form>
        <Input.Root>
          <Input.Label 
            type="day" 
            error={dayErr} />
          <Input.Field
            type='day'
            getter={date.day}
            setter={e => updateDate(
              {...date, day: e.target.value}
            )}
            getError={dayErr}
            setError={setDayErr} />
          <Input.Error src={dayErr} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="month" 
            error={monthErr} />
          <Input.Field
            type='month'
            getter={date.month}
            setter={e => updateDate(
              {...date, month: e.target.value}
            )}
            getError={monthErr}
            setError={setMonthErr} />
          <Input.Error src={monthErr} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="year" 
            error={yearErr} />
          <Input.Field
            type='year'
            getter={date.year}
            setter={e => updateDate(
              {...date, year: e.target.value}
            )}
            getError={yearErr}
            setError={setYearErr} />
          <Input.Error src={yearErr} />
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
