import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import Edit from "./components/Edit";
import AttendanceTable from "./components/AttendanceTable";
import AddStudent from "./components/AddStudent";
import Navbar from "./components/Navbar";
import Confirmation from "./components/Confirmation";
import UpdateAttendmark from "./components/UpdateAttendmark";
import Edit from "./components/Edit"
import { NewAttTable } from "./components/NewAttTable";
import AbsentTable from "./components/AbsentTable";
import Sorting from "./components/Sorting";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={AttendanceTable} />
        <Route exact path="/listAttendace" component={NewAttTable} />
        <Route exact path="/listAttendace" component={Edit} />
        <Route exact path="/addstudent" component={AddStudent} />
        <Route exact path="/updateattendace/:id" component={UpdateAttendmark} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/edit" component={AbsentTable} />
        <Route exact path="/sort" component={Sorting}/>


      </Switch>
    </>
  );
}
export default App;
