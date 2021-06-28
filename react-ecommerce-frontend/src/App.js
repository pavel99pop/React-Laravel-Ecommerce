import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h1>SH Fashion</h1>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/update">
          <UpdateProduct />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
