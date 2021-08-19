import {memo} from 'react';
import {Link} from "react-router-dom";

interface Props { 
}
const Dashboard:React.FC<Props>=(props)=>{
return(
<div className="w-full">
this is dashboard.
<Link to="/Recordings"> <span className="text-blue-500 font-bold">click here to Recordings</span> </Link>
<br />
<Link to="/Login"> <span className="text-blue-500 font-bold">click here to login </span> </Link>
<Link to="/Testlogin"> click here for Testlogin</Link>
</div>
);
};
Dashboard.defaultProps={};
export default memo(Dashboard);