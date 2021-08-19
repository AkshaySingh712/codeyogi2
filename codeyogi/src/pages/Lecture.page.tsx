import {memo} from "react";
import { useParams } from "react-router-dom";
interface Props {}
interface RouteParams {
    Lecturenumber:string;
    Batchnumber :string ; 
}
const Lecture:React.FC<Props>=(props)=>{
    const { Lecturenumber,Batchnumber } =useParams<RouteParams>();
return(

<div>
    showing data of Lecture#{Lecturenumber}and batch #{Batchnumber}. 
</div>
);
};
Lecture.defaultProps={};
export default memo(Lecture);