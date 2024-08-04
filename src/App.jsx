import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import HelloWorld from "./components/HelloWorld";
import Logger from "./components/Logger";

function App() {
  return (
    <>
      <HelloWorld />
      <Greeting name='Anne' />
      <Counter />
      <Logger />
    </>
  );
}

export default App;
