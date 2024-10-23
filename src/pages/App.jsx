// Dependencies & Helpers:
import { useReducer, useState } from 'react';
import { getYear } from 'date-fns';
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

function App() {
  const [dayErr, setDayErr] = useState({
    color: "grey",
    message: "" 
  })
  const [monthErr, setMonthErr] = useState({
    color: "grey",
    message: "" 
  })
  const [yearErr, setYearErr] = useState({
    color: "grey",
    message: "" 
  })

  const [date, updateDate] = useReducer((prev, next) => {
    return { ...prev, ...next };
  }, {
    day: "", month: "", year: ""
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
