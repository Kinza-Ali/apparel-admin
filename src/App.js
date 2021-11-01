import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Orders from "./components/pages/order/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/pages/user/Users";
import UpdateUser from "./components/pages/user/UpdateUser";
import NewUser from "./components/pages/user/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users/:userId">
            <UpdateUser />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
