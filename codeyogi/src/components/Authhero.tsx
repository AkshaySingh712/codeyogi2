import {FC, memo} from "react";
interface Props { 
}
const Authhero:React.FC<Props>=(props)=>{
return(
<div className="h-screen w-1/2 text-white bg-black">
    <img src="/src/logo.png"/>
</div>
);
};
Authhero.defaultProps={};
export default (Authhero);