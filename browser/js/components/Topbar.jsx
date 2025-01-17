import React from 'react'


const Topbar = () => (
  <nav className="navbar navbar-inverse topBar">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
        type="button"
        className="navbar-toggle collapsed"
        data-toggle="collapse"
        data-target=".navbar-collapse">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">Maria Schreiber || Developer</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><a href="#background">Background</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#etc">Etc.</a></li>
          <li><a href="../../MariaSchreiberResume.pdf" download>Resume</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="topbar">
            <a className="topIcon" href="https://github.com/meschreiber">
              <i className="fa fa-github fa-2x" />
            </a>
          </li>
          <li className="topbar">
            <a className="topIcon" href="https://www.linkedin.com/in/maria-elisabeth-schreiber/">
              <i className="fa fa-linkedin fa-2x" />
            </a>
          </li>
          <li className="topbar">
            <a className="topIcon" href="https://medium.com/@meschreiber3">
              <i className="fa fa-medium fa-2x" />
            </a>
          </li>
          <li className="topbar">
            <a className="topIcon" href="mailto:meschreiber3@gmail.com">
              <i className="fa fa-envelope-o fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Topbar
