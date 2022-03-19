import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Service from "../Service";
import { useTable } from 'react-table'




export default class AttendanceTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atten_data: [],
      attend:false,
    };

    this.addStudent = this.addStudent.bind(this);

    this.editAttendance = this.editAttendance.bind(this);
    this.deleteAttendance = this.deleteAttendance.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.changeAttend = this.changeAttend.bind(this);
    this.saveatt = this.saveatt.bind(this);
  }





  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  attendanceHandler(value) {
    // this.setState(attend : !attend.value);
    this.setState(({ attend }) => ({ attend: !attend.value }));
  }

  deleteAttendance(id) {
    Service.deleteAttendance(id).then((res) => {
      this.setState({
        atten_data: this.state.atten_data.filter(
          (attendance) => attendance.id !== id
        ),
      });
    });
  }

  //Additng submit button

  saveatt = (e) => {
    e.preventDefault();
    let attendance = {
     
      attend: this.state.attend,
    };
    console.log("attendance => " + JSON.stringify(attendance));

    // step 5
    if (this.state.id === "_add") {
      Service.updateAttendanceAttendance(attendance).then((res) => {
        this.props.history.push("/listAttendace");
      });
    } else {
      // Service.updateAttendance(attendance, this.state.id).then((res) => {
      //   this.props.history.push("/");
      // });
    }
  };
  // saveatt = (e) => {
  //   e.preventDefault();

  //   let attendance = {
  //     attend: this.state.attend,
  //   };
  //   console.log("attendance =>" + JSON.stringify(attendance));

  //   Service.createAttendance(attendance).then((res) => {
  //     this.props.history.push("/listAttendance");
  //   });
  // };

  editAttendance(id) {
    // this.props.history.push(`/updateattendace/${id}`);
  }

  componentDidMount() {
    Service.getAttendance().then((res) => {
      this.setState({ atten_data: res.data });
    });
  }

  
  addStudent() {
    this.props.history.push("/addstudent");
  }

  changeAttend(event) {
    this.setState({ attend: event.target.value });
  }

  render() {
    return (
      <>
        <div className=" container shadow-lg mt-5 table-data bg-light">
          <h2 className="text-center"> ATTENDANCE</h2>

          <button
            type="button"
            style={{ marginLeft: "980px" }}
            className="btn btn-primary mb-3"
            onClick={this.addStudent}
          >
            ADD STUDENT
          </button>

          {/* subject */}
          <div class="custom-select " style={{ width: "500px;" }}>
            <input type="date" className="" style={{ marginLeft: "20px" }} />
            <select>
              <option value="0">Subject:</option>
              <option value="1">All Students</option>
              <option value="2">JAVA CLASS</option>
              <option value="3">C CLASS</option>
              <option value="4">C++ CLASS</option>
            </select>
          </div>
          {/* //for date */}
        </div>
        <div className="container shadow-lg mt-5 table-data bg-light">
          <h1 className="text-center">Student List</h1>
          <Table striped bordered hover variant="light" rowselection={true}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Registration No</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Branch</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.atten_data.map((attendance) => (
                <tr key={attendance.slno}>
                  {/* <td> {attendance.name} </td> */}
                  <div class="form-check form-switch">
                      <input
                        disabled
                         onChange={(e) => this.setState(({ attend }) => ({ attend: !attend.value }))}
                        // onCheck={()=> this.editAttendance(attendance.id)}
                        value={attendance.name}
                        //  onChange={(e) => this.setState({attend: !attend.value})}
                      />
                    </div>
                  <td>
                  <div class="form-check form-switch">
                      <input
                        disabled
                         onChange={(e) => this.setState(({ attend }) => ({ attend: !attend.value }))}
                        // onCheck={()=> this.editAttendance(attendance.id)}
                        value={attendance.regdno}
                        //  onChange={(e) => this.setState({attend: !attend.value})}
                      />
                    </div>
                    </td>
                 
                    <td>
                  <div class="form-check form-switch">
                      <input
                        disabled
                         onChange={(e) => this.setState(({ attend }) => ({ attend: !attend.value }))}
                        // onCheck={()=> this.editAttendance(attendance.id)}
                        value={attendance.course}
                        //  onChange={(e) => this.setState({attend: !attend.value})}
                      />
                    </div>
                    </td>

                  <td> {}</td>
                  <td>
                    {" "}
                    <div class="form-check form-switch">
                      <input
                        disabled
                        
                         onChange={(e) => this.setState(({ attend }) => ({ attend: !attend.value }))}
                        // onCheck={()=> this.editAttendance(attendance.id)}
                        value={attendance.branch}
                        //  onChange={(e) => this.setState({attend: !attend.value})}
                      />
                    </div>
                  </td>


                  
                  <td>
                    
                   
                    <div class="form-check form-switch">
                      {/* <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={(e) =>
                          this.setState(({ attend }) => ({
                            attend: !attend.value,
                          }))
                        }
                         onCheck={()=> this.editAttendance(attendance.id)}
                        value={attendance.attend}
                          onChange={(e) => this.setState({attend: !attend.value})}
                      /> */}
                      <input type='checkbox' />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Absent
                      </label>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button
            style={{ marginTop: "10px" }}
            type="button"
            class="btn btn-primary"
            onClick={this.saveatt}
          >
            submit
          </button>

          {/* <button
            type="button"

            style={{ marginLeft: "980px" }}
            className="btn btn-primary mb-3"
            href="/confirmation"
          >
            
          </button> */}
        </div>
      </>
    );
  }
}


