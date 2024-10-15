// Stylesheet:
import './App.css';

// Assets:
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
  return (
    <>
      <Container>
        <h1>Olá mundo!</h1>
        <Form></Form>
        <Break.Root>
          <Break.Icon src={IconArrow} alt="Arrow" />
        </Break.Root>
      </Container>
    </>
  )
}

export default App;
