import "./App.css";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import ItemList from "./components/ItemList";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

// Hvad er fejlen her og hvordan løses den?

//name skal laves til prop

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <>
      <Message />
      <Greeting name="Alice" />
      <Welcome />
      <ItemList />
      <Counter />
      <UserProfile />
    </>
  );
};

export default App;
