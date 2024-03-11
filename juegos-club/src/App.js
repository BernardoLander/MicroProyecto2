import React from "react";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const App= () => {
    return(
        <div className="App">
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    );
    }
export default App;