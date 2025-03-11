import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/Login/Login";
import Page404 from "../pages/page 404/Page404";

function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/asdsd" component={Page404} />
      <Route path="/" />
    </Switch>
  );
}

export default Routes;
