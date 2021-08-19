import { memo} from "react";
import { Link, useHistory } from "react-router-dom";
import {Formik,useFormik} from "formik";
import * as yup from "yup";
import {HiLockClosed} from "react-icons/hi";
import {FaSpinner} from "react-icons/fa";


interface Props { 
}
const Testlogin:React.FC<Props>=(props)=>{
   const history=useHistory();
   const {
     getFieldProps,
     isSubmitting,
     errors,
     touched
   }= useFormik({
  initialValues: {
    email:"",
    password:"",
  },
  validationSchema:yup.object().shape({
    email:yup.string().required().email(),
    password:yup.string().required().min(8,({min})=>`atleast ${min} character`)
  }),
  onSubmit:(data,{setSubmitting})=>{
    console.log("form submitting started",data);
    setTimeout(()=> {
      console.log("form submitted");
      history.push ("/Dashboard");
      setSubmitting(false);
    },5000);
  },
   });
  
  let emailerror=""
  let passworderror=""
 
return(
<div>
    <div className="flex justify-center content-center font-sans-serif">
        <div className="flex-col text-gray-700 mx-28 my-4">
        <div> 
                <h1 className="text-4xl font-normal tracking-wide">Log In to <span className="text-indigo-500  font-medium "> CODEYOGI</span></h1>
                <p className="mt-5">New here? <Link to="/Signup" className="underline  text-indigo-500 "> Create an account</Link> </p>
            </div> 
            <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
            type="submit"
              className="group relative mt-5 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed
                 className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
            <div>
           {isSubmitting && <FaSpinner  className="mt-5 animate-spin"></FaSpinner>}
          </div></div>
            </form>         
        </div>
    </div>
</div>
);
};
Testlogin.defaultProps={};
export default memo(Testlogin);