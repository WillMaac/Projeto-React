import Routes from "./routes/Routes";
import history from "./service/History";
import { Router } from "react-router-dom";
import Headers from "./components/headers/Headers";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";

function App() {
  return (
    <Router history={history}>
      <Headers />
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
