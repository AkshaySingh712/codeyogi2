import {FC, memo} from "react";
import{Route,Switch} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";

interface Props { 
}
const AppContainer:React.FC<Props>=(props)=>{
return(
    <div className="flex flex-row ">
        <Sidebar></Sidebar>
        <Switch>
            <Route path="/Dashboard">
                <DashboardPage></DashboardPage>
            </Route>
            <Route path="/Recordings">
                <Recordings></Recordings>
            </Route>
            <Route path="/Lecture/:Lecturenumber/Batch/:Batchnumber">
                <LecturePage></LecturePage>
            </Route>
        </Switch>

    </div>

);
};
AppContainer.defaultProps={};
export default memo(AppContainer);