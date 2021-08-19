import React, {FC, InputHTMLAttributes, memo} from "react";
import { Link } from "react-router-dom";
interface  Props extends InputHTMLAttributes<HTMLInputElement> { 
    touched?:boolean;
    error?:string;
    id:string;
    placeholder:string;
}
const Input:React.FC<Props>=({touched,placeholder,id, className, error,...rest})=>{
return(
  <>
             <div className="flex-col flex-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
           {id &&
            placeholder && 
            <label className=" w-5 -bottom-10 sr-only" htmlFor={id}>
              {placeholder}
              </label> }  
            <input
            {...rest}
            id={id}
              className={"appearance-none rounded-none  block w-full px-3 py-2 border border-b-2 border-t-0 border-r-0 border-l-0 placeholder-gray-400 text-gray-900  " + className}
              placeholder={placeholder}
            />              
            </div>
            {touched && <div className="text-red-800">{error}</div>}
</>
);
};
Input.defaultProps={};
export default memo(Input)