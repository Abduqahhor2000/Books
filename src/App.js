import Navbar from "./Component/Navbar";
import SearchInput from "./Component/SearchInput";
import Main from "./Component/Main";
import ornament from "./img/ornament.svg";
import SignIn from "./Component/SignIn";
import "./App.css";
import { useEffect, useState } from "react";
import AuthContext from "./contexts/AuthContext";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignUp from "./Component/SignUp";

const initailState = {
  token: null,
  user: {}
}

const defaultUser = {
  email: "birnima@gmail.com",
  firstName: "Adam",
  LastName: "Jeckson"
}

function App() {
  const [authDetails, setAuthDetails] = useState(initailState);
  const token = authDetails.token;

  useEffect(()=>{
    
  }, []);


  if(token){
    return (
      <AuthContext.Provider value={{}}>
        <div className="home">
          <div className="container-home">
            <Navbar /> 
            <SearchInput />
            <Main />
          </div>
          <img className="ornament" src={ornament} alt="jnknjk"></img>
        </div>
      </AuthContext.Provider>
    );
  }
  return(
    <AuthContext.Provider value={{ setAuthDetails }}>
      <Router>
        <Switch>
          <Route component={SignIn} exact path="/sign-in" />
          <Route component={SignUp} exact path="/sign-up" />
          <Route component={SignIn} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
  
}

export default App;
