import React, { Component } from "react";
import Service from "../Service";
import { Form, Row, Button } from "react-bootstrap";

export default class UpdateAttendmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      attend: "",
      
    };
    
    this.changeAttendHandler=this.changeAttendHandler.bind(this);
    this.updateAttendance = this.updateAttendance.bind(this);
  }

  componentDidMount() {
    Service.getAttendanceById(this.state.id).then((res) => {
      let attendance = res.data;
      this.setState({
        attend: attendance.attend,
        
      });
    });
  }


  saveatt = (e) => {
    e.preventDefault();
    let attendance = {
     
      attend: this.state.attend,
    };
    console.log("attendance => " + JSON.stringify(attendance));

    // step 5
    if (this.state.id === "_add") {
      Service.updateAttendance(attendance).then((res) => {
        this.props.history.push("/listAttendace");
      });
    } else {
      Service. createAttendance(attendance, this.state.id).then((res) => {
        this.props.history.push("/");
      });
    }
  };

  // updateAttendance = (e) => {
  //   e.preventDefault();

  //   let attendance = {
  //     attend: this.state.attend,
      
  //   };
  //   console.log("attendance =>" + JSON.stringify(attendance));
  //   console.log("id =>" + JSON.stringify(this.state.id));
  //   Service.updateAttendance(attendance, this.state.id).then((res) => {
  //     this.props.history.push("/AttendaceTable");
  //   });
  // };
  changeAttendHandler(event) {
    this.setState({ attend: event.target.value });
  }

  cancel() {
    this.props.history.push("/AttendaceTable");
  }

  render() {
    return (
      <>
       
      </>
    );
  }
}
