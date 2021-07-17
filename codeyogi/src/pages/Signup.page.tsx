import {FC, memo} from "react";
import {Link} from "react-router-dom";
interface Props { 
}
const Signup:React.FC<Props>=(props)=>{
return(
<div>
    this is signup page.
<Link to="/Login"> 
<span className="text-blue-500 font-bold">click here to login</span>
 </Link>  
 </div>
);
};
Signup.defaultProps={};
export default memo(Signup);