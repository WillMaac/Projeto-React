import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/Login/Login";
import Page404 from "../pages/page 404/Page404";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  component={Page404} />
    </Switch>
  );
}

export default Routes;
