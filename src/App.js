import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './pages/Login/PrivateRoute'
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Dashboard from "./pages/Dashboard/Dashboard";
import Items from "./pages/Items/Items";
import Contact from "./pages/Contact/Contact";
import Payment from "./pages/Dashboard/Payment/Payment";
import OrderList from "./pages/Dashboard/OrderList/OrderList";
import AddFood from "./pages/Dashboard/AddFood/AddFood";
import Review from "./pages/Dashboard/Review/Review";
import AddAdmin from "./pages/Dashboard/AddAdmin/AddAdmin";


export const AdminContext = createContext();
export const UserContext = createContext();
export const CartContext = createContext();
export const MsgContext = createContext();


function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [loginUser, setLoginUser] = useState({});
  const [cart, setCart] = useState({})
  const [errormsg, setErrormsg] = useState('')
  return (
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
          <CartContext.Provider value={[cart, setCart]}>
            <MsgContext.Provider value={[errormsg, setErrormsg]}>
              {
                errormsg && <div className="alert alert-danger" role="alert">
                  {errormsg}
                </div>
              }

              <Router>
                <Switch>
                  <Route exact path='/'>
                    <Home></Home>
                  </Route>
                  <Route path='/login'>
                    <Login ></Login>
                  </Route>
                  <PrivateRoute path='/dashboard'>
                    <Dashboard ></Dashboard>
                  </PrivateRoute>
                  <PrivateRoute path='/orderlist'>
                    <OrderList ></OrderList>
                  </PrivateRoute>
                  <Route path='/items'>
                    <Items></Items>
                  </Route>
                  <PrivateRoute path='/addFood'>
                    <AddFood ></AddFood>
                  </PrivateRoute>
                  <PrivateRoute path='/addAdmin'>
                    <AddAdmin></AddAdmin>
                  </PrivateRoute>
                  <PrivateRoute path='/review'>
                    <Review></Review>
                  </PrivateRoute>
                  <PrivateRoute exact path='/payment'>
                    <Payment ></Payment>
                  </PrivateRoute>
                  <Route path='/contact'>
                    <Contact></Contact>
                  </Route>
                </Switch>
              </Router>
            </MsgContext.Provider>
          </CartContext.Provider>
        </AdminContext.Provider>
      </UserContext.Provider>
    );
}

export default App;
