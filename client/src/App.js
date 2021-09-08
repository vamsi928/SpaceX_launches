import "bootstrap/dist/css/bootstrap.min.css";
import spaceX from "./spaceX.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Launcher } from "./Components/Launcher";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LaunchDetails } from "./Components/LaunchDetails";

//apollo graphql setup
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container text-center">
        <img src={spaceX} alt="spaceX logo"></img>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Launcher} />
            <Route path="/launch/:id" component={LaunchDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
