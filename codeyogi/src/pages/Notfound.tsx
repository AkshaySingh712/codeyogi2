import {FC, memo} from "react";
interface Props { 
}
const Notfound:React.FC<Props>=(props)=>{
return(
<div className=" flex justify-center pt-36 content-center h-screen bg-red-600 text-bold text-9xl">
    *PAGE NOT FOUND*
</div>
);
};
Notfound.defaultProps={};
export default memo(Notfound);