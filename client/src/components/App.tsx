import { FunctionComponent, useEffect, useState } from "react";
import { getPersons, PersonInterface } from "../services/person";
import PersonList from "./PersonList";

const App: FunctionComponent = () => {
  const [persons, setPersons] = useState<PersonInterface[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Every time");
  });

  useEffect(() => {
    const foo = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      clearInterval(foo);
    };
  }, []);

  useEffect(() => {
    console.log("Every time persons change");
  }, [persons]);

  useEffect(() => {
    getPersons().then(setPersons);

    console.log("Rendered only once, as no deps provided");
  }, []);

  return (
    <main>
      <h1>Mah ERPpis!</h1>

      <p>Render rendered {counter} times</p>

      <PersonList persons={persons} />
    </main>
  );
};

export default App;
