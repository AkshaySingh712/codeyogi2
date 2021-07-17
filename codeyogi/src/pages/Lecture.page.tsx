import {FC, memo} from "react";
import { useParams } from "react-router-dom";
interface Props { 
}
const Lecture:React.FC<Props>=(props)=>{
    const { Lecturenumber,Batchnumber } =useParams<any>();
return(

<div>
    showing data of Lecture#{Lecturenumber}and batch #{Batchnumber}. 
</div>
);
};
Lecture.defaultProps={};
export default memo(Lecture);