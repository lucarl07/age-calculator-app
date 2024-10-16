// Dependencies & Helpers:
import { useState } from 'react';
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
  const [day, setDay] = useState('')
  const [dayErr, setDayErr] = useState({
    color: "grey",
    message: ""
  })
  
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const age = calculateAge(day, month, year)

  return (
    <Container>
      <Form>
        <Input.Root>
          <Input.Label 
            type="day" 
            error={dayErr} />
          <Input.Field
            getter={day}
            setter={setDay}
            placeholder='DD'
            getError={dayErr}
            setError={setDayErr} />
          <Input.Error message={dayErr.message} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="month" 
            error={dayErr} />
          <Input.Field
            getter={month}
            setter={setMonth}
            placeholder='MM'
            getError={{}}
            setError={false} />
          <Input.Error message={""} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="year" 
            error={dayErr} />
          <Input.Field
            getter={year}
            setter={setYear}
            placeholder='YYYY'
            getError={{}}
            setError={false} />
          <Input.Error message={""} />
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
