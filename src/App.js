import "./App.css";
import { useEffect, useState } from "react";
import AddBook from "./Component/AddBook";
import AddAuthor from "./Component/AddAuthor";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import Home from "./Component/Home";
import Author from "./Component/Author";
import { Route, Switch, BrowserRouter as Router, useLocation, Redirect } from 'react-router-dom';
import AuthContext from "./contexts/AuthContext";
import GlobalContext from "./contexts/GlobalContext";

 const initailState = {
    token: null,
    user: {}
  }
  
  const defaultUser = {
    email: "birnima@gmail.com",
    firstName: "Adam",
    LastName: "Jeckson"
  }


function App () {
    const [authDetails, setAuthDetails] = useState(initailState);
    // const token = authDetails.token;
    // const location = useLocation();

    useEffect(()=>{
        const user  = JSON.parse(localStorage.user || '{}');
        const token = localStorage.getItem('token');
        if(token){
          setAuthDetails((state) => ({
            ...state,
            token: token,
            user: user || defaultUser
          }))
        }
    }, []);
    
    const contextValue = {
        token: authDetails.token,
        user: authDetails.user,
        setAuthDetails
    }

    // const canRedirectToHome = location.pathname === '/sign-in' || location.pathname === '/sign-up';
      
    return(
     <>
        <GlobalContext.Provider value={contextValue}>
        <AuthContext.Provider value={{ setAuthDetails }}>
            {
              canRedirectToHome ? <Redirect from={["/sign-in", '/sign-up']} to="/" /> : null
            }
            <Router>
             <Switch>       
                <Route component={Home} exact path={["/", '/books', '/products']} />
                <Route component={SignIn} exact path="/sign-in" />
                <Route component={SignUp} exact path="/sign-up" />
                <Route component={Author} exact path="/author" />
                <Route component={AddAuthor} exact path="/add-author" />
                <Route component={AddBook} exact path="/add-book" />
             </Switch>
          </Router>
        </AuthContext.Provider>
        </GlobalContext.Provider>
     </>
    )
}

export default App;