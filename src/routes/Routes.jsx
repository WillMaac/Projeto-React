import { Switchgit } from "react-router-dom/cjs/react-router-dom.min";
import MyRoute from "./MyRoutes";
import Login from "../pages/Login/Login";
import Page404 from "../pages/page 404/Page404";

function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
