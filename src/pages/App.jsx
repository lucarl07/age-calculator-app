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
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const age = calculateAge(day, month, year)

  return (
    <Container>
      <Form>
        <Input.Root>
          <Input.Label 
            type="day" 
            hasError={false} />
          <Input.Field
            getter={day}
            setter={setDay}
            placeholder='dd'
            hasError={false} />
          <Input.Error message={""} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="month" 
            hasError={false} />
          <Input.Field
            getter={month}
            setter={setMonth}
            placeholder='dd'
            hasError={false} />
          <Input.Error message={""} />
        </Input.Root>

        <Input.Root>
          <Input.Label 
            type="year" 
            hasError={false} />
          <Input.Field
            getter={year}
            setter={setYear}
            placeholder='dd'
            hasError={false} />
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
