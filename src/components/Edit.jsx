import React, { Component } from "react";
import Service from "../Service";

class CreateCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      regdno: "",
      date: "",
      name: "",
      branch: "",
      course: "",
      semester:"",
      attend:"",
    };
    this.changeregdnoHandler = this.changeregdnoHandler.bind(this);
    this.changedateHandler = this.changedateHandler.bind(this);
    this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      Service.getAttendanceById(this.state.id).then((res) => {
        let attendance = res.data;
        this.setState({
          regdno: attendance.regdno,
          date: attendance.date,
          name: attendance.name,
          branch: attendance.branch,
          course: attendance.course,
          semester: attendance.semester,
          attend: attendance.attend
        });
      });
    }
  }
  saveOrUpdateCompany = (e) => {
    e.preventDefault();
    let attendance = {
      regdno: this.state.regdno,
      date: this.state.date,
      name: this.state.name,
      branch: this.state.branch,
      course: this.state.course,
      semester: this.state.semester,
      attend: this.state.attend
    };
    console.log("attendance => " + JSON.stringify(attendance));

    // step 5
    if (this.state.id === "_add") {
      Service.createAttendance(attendance).then((res) => {
        this.props.history.push("/updateattendace");
      });
    } else {
      Service.updateAttendance(attendance, this.state.id).then((res) => {
        this.props.history.push(`/updateattendace`);
      });
    }
  };

  changeregdnoHandler = (event) => {
    this.setState({ regdno: event.target.value });
  };

  changedateHandler = (event) => {
    this.setState({ date: event.target.value });
  };

  changenameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changebranchHandler = (event) => {
    this.setState({ branch: event.target.value });
  };

  changecourseHandler = (event) => {
    this.setState({ course: event.target.value });
  };
  changesemesterHandler = (event) => {
    this.setState({ semester: event.target.value });
  };
  changeattendHandler = (event) => {
    this.setState({ attend: event.target.value });
  };

  cancel() {
    this.props.history.push("/placement_dept/employer_list");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Company</h3>;
    } else {
      return <h3 className="text-center">Update Compnay</h3>;
    }
  }
  render() {
    const { latitude, longitude } = this.state;
    return (
      <div>
        <section class="">
          <div class="">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-lg-12 col-xl-11">
                <div class=" text-black">
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          {this.getTitle()}
                        </p>

                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                placeholder="Your company Name"
                                value={this.state.regdno}
                                onChange={this.changeregdnoHandler}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                placeholder="YourCompany Address"
                                value={this.state.date}
                                onChange={this.changedateHandler}
                              />
                            </div>
                          </div>

                          {/* dsvds */}
                          {/* <input type="text" value={latitude} />
                              <input type="text" value={longitude} /> */}
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Your Company Email"
                                value={this.state.name}
                                onChange={this.changenameHandler}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Your Company Type"
                                value={this.state.branch}
                                onChange={this.changebranchHandler}
                              />
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <textarea
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Your Description"
                                value={this.state.course}
                                onChange={this.changecourseHandler}
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <textarea
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Your Description"
                                value={this.state.semester}
                                onChange={this.changesemesterHandler}
                              />
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <textarea
                                type="text"
                                id="form3Example3c"
                                class="form-control"
                                placeholder="Your Description"
                                value={this.state.attend}
                                onChange={this.changeattendHandler}
                              />
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              className="btn btn-success btn-lg"
                              onClick={this.saveOrUpdateCompany}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-danger btn-lg"
                              onClick={this.cancel.bind(this)}
                              style={{ marginLeft: "10px" }}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://image.freepik.com/free-vector/people-standing-flight-registration-counter-family-baggage-ticket-flat-vector-illustration-travelling-vacation_74855-8511.jpg"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CreateCompany;