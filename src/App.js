import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Products from './Pages/Explore/Products/Products';
import Reviews from './Pages/Home/Reviews/Reviews';
import About from './Pages/Home/About/About';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/explore" >
              <Products />
            </PrivateRoute>
            <Route path="/services" >
              <Services />
            </Route>
            <Route path="/reviews" >
              <Reviews />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup" >
              <SignUp />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
