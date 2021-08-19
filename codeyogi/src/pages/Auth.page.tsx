import React, { memo} from "react";
import {Route,Switch} from "react-router-dom";
import Authhero from "../components/Authhero";
import Login from "./Login.page";
import Signup from "./Signup.page";
import Testlogin from "./Testlogin"
interface Props { 
}
const Auth:React.FC<Props>=(props)=>{
return(
<div className="flex flex-row justify-between">
    <div>
    <Switch>
        <Route path="/Login">
            <Login></Login>
        </Route>
        <Route path="/Signup">
            <Signup></Signup>
        </Route>
        <Route path="/Testlogin">
                <Testlogin></Testlogin>
            </Route>
    </Switch>
    </div>
    <Authhero></Authhero>
</div>
);
};
Auth.defaultProps={};
export default memo(Auth);