import {FC, memo} from "react";
import {Link} from "react-router-dom";
interface Props { 
}
const Login:React.FC<Props>=(props)=>{
return(
<div className="text-black">
    this is login page
    <br/>
    Don't have an account <Link to="/Signup">
        <span className="font-bold text-blue-500">click here for signup  </span>
        </Link><br/>
    <Link to="/Dashboard">
         <span className="text-blue-500 font-bold">click here to dashboard</span>
          </Link>
</div>
);
};
Login.defaultProps={};
export default memo(Login);