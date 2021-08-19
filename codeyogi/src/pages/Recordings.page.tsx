import {memo} from "react";
import {Link} from "react-router-dom";
interface Props {}
const Recordings:React.FC<Props>=(props)=>{
return(
<div>
    this is recordings page.
    <Link to="/Dashboard"> <span className="text-blue-500 font-bold">click here to Dashboard </span> </Link>
</div>
);
};
Recordings.defaultProps={};
export default memo(Recordings);