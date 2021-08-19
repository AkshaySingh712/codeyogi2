import { memo} from "react";
interface Props { 
}
const Sidebar:React.FC<Props>=(props)=>{
return(
<div className="w-44 bg-gray-400 h-screen">
    this is side bar.
</div>
);
};
Sidebar.defaultProps={};
export default memo(Sidebar);