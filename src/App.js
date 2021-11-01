import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/HomePage/Footer/Footer';
import Navbar from './components/HomePage/Navbar/Navbar';

import AuthProvider from './context/AuthProvider';

import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import DestinationBooking from './components/DestinationBooking/DestinationBooking';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import ManageDestinations from './components/ManageDestinations/ManageDestinations';
import Orders from './Orders/Orders';
import Destinations from './components/Destinations/Destinations';
import ManageOrder from './components/ManageOrder/ManageOrder';

function App() {
  return (
    <div style={{backgroundColor:"#F7FAFD",width:'100%'}}>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/destinations">
              <Destinations></Destinations>
            </Route>
            <Route exact path="/manageDestinations">
              <ManageDestinations></ManageDestinations>
            </Route>
           
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/manageorders">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/booking/:destinationId">
              <DestinationBooking></DestinationBooking>
            </PrivateRoute>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
