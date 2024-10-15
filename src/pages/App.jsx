// Dependencies:
import { useState } from 'react';

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

  return (
    <>
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
          <Output value={0} period='day' />
          <Output value={0} period='month' />
          <Output value={0} period='year' />
        </Results>
      </Container>
    </>
  )
}

export default App;
