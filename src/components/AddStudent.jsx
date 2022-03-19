import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddStudent extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          
    
    name: '',
    regdno:'',
    course:'',
    semester:'',
    branch:''
        }
        
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRegnoHandler = this.changeRegnoHandler.bind(this);
        this.changeCourseHandler = this.changeCourseHandler.bind(this);
        this.changeSemesterHandler = this.changeSemesterHandler.bind(this);
        this.changeBranchHandler = this.changeBranchHandler.bind(this);
        

        this.saveAttendance = this.saveAttendance.bind(this);
      }
  
      saveAttendance = (e) =>{
        e.preventDefault();
    
        let attendance = {
            
          name:this.state.name,
          regdno:this.state.regdno,
          course:this.state.course,
          semester:this.state.semester,
          branch:this.state.branch,
         }
        console.log('attendance =>' + JSON.stringify(attendance));
    
        Service.createAttendance(attendance).then(res =>{
          this.props.history.push("/AttendaceTable");
        });
    
        
      }
      
    
      changeNameHandler(event){
        this.setState({name: event.target.value})
      }
   
      changeRegnoHandler(event){
        this.setState({regdno: event.target.value})
      }
    
      changeCourseHandler(event){
        this.setState({course: event.target.value})
      }
      changeSemesterHandler(event){
        this.setState({semester: event.target.value})
      }
      changeBranchHandler(event){
        this.setState({branch: event.target.value})
      }
      changeAttendHandler(event){
        this.setState({attend: event.target.value})
      }

      
      cancel(){
        this.props.history.push("/");
      }
    
      render() {
        return (
    
    <>
    
    <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Adding Details</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">                    
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter Your Name
                      </Form.Label>
                    
                      <Form.Control
                        type="text"
                        value={this.state.name}
                        onChange={this.changeNameHandler}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter Your Registration No
                      </Form.Label>
                    
                      <Form.Control
                        type="Number"
                        value={this.state.regdno}
                        onChange={this.changeRegnoHandler}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter Your Course
                      </Form.Label>
                    
                      <Form.Control
                        type="text"
                        value={this.state.course}
                        onChange={this.changeCourseHandler}
                      />
                    </Form.Group>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Semester
                      </Form.Label>
                      <Form.Control
                        type="Number"
                        value={this.state.semester}
                        onChange={this.changeSemesterHandler}
                      />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter Branch
                      </Form.Label>
                    
                      <Form.Control
                        type="text"
                        value={this.state.branch}
                        onChange={this.changeBranchHandler}
                      />
                  </Form.Group>
                  {/* <Form.Group controlId="formGridZip">
                      <Form.Label>
                        Enter
                      </Form.Label>
                    
                      <Form.Control
                        type="text"
                        value={this.state.attend}
                        onChange={this.changeAttendHandler}
                      />
                  </Form.Group> */}
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveAttendance}
                >
                  Submit
                </Button>
                 <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                > Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      
  
          </>
        );
      }
}
