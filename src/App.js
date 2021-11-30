import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import NewProduct from "./components/pages/products/NewProduct";
import UpdateProduct from "./components/pages/products/UpdateProduct";
import SearchProduct from "./components/pages/products/SearchProduct";
import Orders from "./components/pages/order/Orders";
import UpdateOrder from "./components/pages/order/UpdateOrder";
import NewOrder from "./components/pages/order/NewOrder";
import Users from "./components/pages/user/Users";
import UpdateUser from "./components/pages/user/UpdateUser";
import NewUser from "./components/pages/user/NewUser";
import userService from "./services/UserService";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        {userService.isAdmin() && <Sidebar />}
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return userService.isAdmin() ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
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
          <Route path="/newProduct">
            <NewProduct />
          </Route>
          <Route path="/searchProduct">
            <SearchProduct />
          </Route>
          <Route path="/product/:productId">
            <UpdateProduct />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/order/:orderId">
            <UpdateOrder />
          </Route>
          <Route path="/newOrder">
            <NewOrder />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
