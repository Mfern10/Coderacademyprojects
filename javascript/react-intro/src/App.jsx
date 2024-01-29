import './App.css'
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Greeting foo="bar" name="Mitch" age={29} />
      <Greeting abc="123" name="Kate"/>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur
        officiis doloremque illum harum, voluptates atque obcaecati
        reprehenderit, inventore error laboriosam ea suscipit ducimus fuga cum
        dicta! Fugiat, eaque facere?
      </p>
      <Greeting />
    </>
  );
}

export default App
