import React from "react";
import "./App.pcss";
import Loading from "./Loading";
import IndexPage from "./IndexPage";
import PersonPage from "./PersonPage";
import { Switch, Route } from "react-router";

class App extends React.PureComponent {
  state = {
    error: undefined
  };

  componentDidMount() {
    if (this.props.persons.count() > 0) {
      return;
    }

    this.props.getPersons();
  }

  componentDidCatch(e) {
    this.setState({
      error: e
    });
  }

  render() {
    const { loading, persons, hirePerson, firePerson } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <h1>OH NOES! ERROR: {error.message}</h1>
        </div>
      );
    }

    return (
      <div>
        {loading > 0 && <Loading />}

        <h1>
          <img src={require("../assets/trollo.png")} alt="Trollo" />
          Fraktio Tussinaama ERP 7.0
        </h1>

        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <IndexPage
                  persons={persons}
                  hirePerson={hirePerson}
                  firePerson={firePerson}
                />
              );
            }}
          />
          <Route
            path="/person/:id"
            exact
            render={props => {
              const { id } = props.match.params;
              const person = persons.find(p => p.id === id);
              return <PersonPage person={person} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
