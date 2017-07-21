import React from 'react'


const Topbar = () => (
  <div className="topBar">
    <div className="container">
      <p className = "topName">Maria Schreiber || Software Engineer </p>
      <ul>
        <li className="topbar">
          <a className="topIcon" href="../../Maria_Schreiber_Resume.pdf" target="_blank">
            <i className="fa fa-file-pdf-o fa-2x" />
          </a>
        </li>
        <li className="topbar">
          <a className="topIcon" href="https://github.com/meschreiber" target="_blank">
            <i className="fa fa-github fa-2x" />
          </a>
        </li>
        <li className="topbar">
          <a className="topIcon" href="https://www.linkedin.com/in/maria-elisabeth-schreiber/" target="_blank">
            <i className="fa fa-linkedin fa-2x" />
          </a>
        </li>
        <li className="topbar">
          <a className="topIcon" href="https://medium.com/@meschreiber3" target="_blank">
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
)

export default Topbar
