import React from 'react';
import  {BrowserRouter ,Redirect,Route,Switch } from "react-router-dom"
import AppContainer from './pages/Appcontainer';
import AuthPage from './pages/Auth.page';
import Notfound from './pages/Notfound';



function App() {
return(
<div>
  <BrowserRouter>
  <Switch>
      <Route path="/"exact>
        <Redirect to="/Login"></Redirect>
      </Route>
     <Route path={["/Login","/Signup"]} exact>
       <AuthPage></AuthPage>
    </Route>
    <Route 
    path=
    {["/Dashboard","/Recordings",
    "/Lecture/:Lecturenumber/Batch/:Batchnumber"]} 
    exact >
      <AppContainer></AppContainer>
    </Route>
    <Route>
      <Notfound></Notfound>
    </Route>
    </Switch>
  </BrowserRouter>
  </div>
);
};
 export default App;