import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from "./Components/Dashboard/AddAdmin/AddAdmin";
import AdminAddService from "./Components/Dashboard/AdminAddService/AdminAddService";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PostReview from "./Components/Dashboard/PostReview/PostReview";
import AllOrderedList from "./Components/Dashboard/AllOrderedList/AllOrderedList";
import Dashboard from "./Components/Dashboard/Dashboard";
import Order from "./Components/Dashboard/Order/Order";
import PrivateRoute from "./Components/Login/PrivateRoute";
import ClientOrderedList from "./Components/Dashboard/ClientOrderedList/ClientOrderedList";

export const UserContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({
    displayName: '',
    email: '',
    photo: ''
  })
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute exact path='/dashboard/adminAddService'>
            <AdminAddService></AdminAddService>
          </PrivateRoute>
          <privateRoute exact path='/dashboard/allOrderedList'>
            <AllOrderedList></AllOrderedList>
          </privateRoute>
          <PrivateRoute exact path='/dashboard/addAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/clientOrderedList'>
            <ClientOrderedList></ClientOrderedList>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/postReview'>
            <PostReview></PostReview>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/order/:id'>
            <Order></Order>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
