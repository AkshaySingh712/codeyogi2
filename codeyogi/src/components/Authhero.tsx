import { memo} from "react";
interface Props { 
}
const Authhero:React.FC<Props>=(props)=>{
return(
<div className="h-screen w-1/2 text-white bg-black">
    <img src="/src/logo.png" alt="this logo " />
</div>
);
};
Authhero.defaultProps={};
export default memo(Authhero);