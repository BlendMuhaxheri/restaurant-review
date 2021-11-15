import Header from "./components/Header"
import LogInForm from "./components/LogInForm"
import SignUpForm from "./components/SignUpForm"
import HomePage from "./pages/homePage"
import Restaurants from "./components/Restaurants"
import Edit from "./components/Edit"
import Owner from "./pages/Owner"
import Costumer from "./pages/Costumer"
import NewRestaurant from "./components/NewRestaurant"
import { useSelector } from "react-redux"
import { Route } from 'react-router-dom'
import { useEffect } from 'react'
import PrivateRoute from "./components/PrivateRoute"



import "./App.css"
import { useDispatch } from "react-redux"
import { isUserLoggedIn } from "./actions/authAction"


function App() {
  const { authenticate } = useSelector(state => state.loggInReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authenticate) {
      dispatch(isUserLoggedIn())
    }

  }, [authenticate])
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route path='/login' exact component={LogInForm} />
      <Route path='/signup' component={SignUpForm} />
      {/* <PrivateRoute path='/homepage/owner' exact component={HomePage} /> */}
      <Route path="/homepage" component={HomePage} />
      <Route path='/owner' component={Owner} />
      <Route path='/costumer' component={Costumer} />
      <Route path='/restaurants' component={Restaurants} />
      <Route path='/newrestaurant' exact component={NewRestaurant} />
      <Route path="/restaurant/:id" exact component={Edit} />


    </div>
  );
}

export default App;
