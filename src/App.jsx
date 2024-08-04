import "./App.css";

// Hvad er fejlen her og hvordan løses den?

const Greeting = () => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <>
      <Greeting name='Alice' />
    </>
  );
};

export default App;
