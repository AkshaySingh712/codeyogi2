import {FC , memo} from 'react';
import {Link} from "react-router-dom";
interface Props { 
}
const Dashboard:React.FC<Props>=(props)=>{
return(
<div className="w-full">
this is dashboard.
<Link to="/Recordings"> <span className="text-blue-500 font-bold">click here to Recordings</span> </Link>
</div>
);
};
Dashboard.defaultProps={};
export default memo(Dashboard);