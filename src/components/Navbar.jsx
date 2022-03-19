import React, { setShow, show, Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top">
        <div className="container pt-2 pb-2 main-nav">
          <a className="navbar-brand e-lg" href="#">
            Attendance Module
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <div className="navbar-nav nav-m text-center me-auto mb-2 mb-lg-0">
              <li className="nav-item nav-t">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item nav-t">
                <a className="nav-link" href="/listAttendace">
                  Service
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
