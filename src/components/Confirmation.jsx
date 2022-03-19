import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Service from "../Service";

export default class Confirmation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      atten_data: [],
      isToggleOn: true,
    };

    this.addAttendance = this.addAttendance.bind(this);
    this.editAttendance = this.editAttendance.bind(this);
    this.deleteAttendance = this.deleteAttendance.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
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
  editAttendance(id) {
    this.props.history.push(`/updateattendace/${id}`);
  }

  componentDidMount() {
    Service.getAttendance().then((res) => {
      this.setState({ atten_data: res.data });
    });
  }
  addAttendance() {
    this.props.history.push("/Confirmation");
  }

  render() {
    return (
      <>
        
        <div className=" container shadow-lg mt-5 table-data bg-light">




        

          
          
       
          
        {/* subject */}
          {/* <div class="custom-select " style={{width:"500px;"}}>
<input type="date" className=""  style={{ marginLeft: "20px" }}/>
  <select>
    <option value="0">Subject:</option>
    <option value="1">All Students</option>
    <option value="2">JAVA CLASS</option>
    <option value="3">C CLASS</option>
    <option value="4">C++ CLASS</option>
  </select>

</div>   */}
{/* //for date */}

        </div>
        <div className="container shadow-lg mt-5 table-data bg-light">
          <h1 className="text-center">Student Absent List</h1>
          <Table striped bordered hover variant="light">
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
                  <td> {attendance.name} </td>
                  <td>{attendance.regdno}</td>
                  <td> {attendance.course}</td>

                  <td> {attendance.semester}</td>
                  
                  <td> {attendance.branch}</td>
                  <td>{attendance.attend}</td>
                  <td>
                    {/* <button
                     
                      className="btn btn-info heffect"
                    >
                      P
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                   
                      className="btn btn-danger heffect"
                    >
                      A
                    </button> */}

                    {/* <button
                      onClick={this.handleClick}
                      // onClick={ () => this.preAsb(attendance.slno)}
                      style={{ marginLeft: "10px" }}
                      className="btn btn-info heffect"
                    >
                      {this.state.isToggleOn ? "P" : "A"}
                    </button> */}



                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button
            type="button"

            style={{ marginLeft: "980px" }}
            className="btn btn-primary mb-3"
            // onClick={this.addAttendance}
          >
            SEND MAIL
          </button>
        </div>
      </>
    );
  }
}
