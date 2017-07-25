import React from 'react'

const Background = () => (
  <div className="container">
    <div>
      <div className="row">
        <div className="col-md-9">
          <h3>About me</h3>
          <p>A few weeks after graduating with a degree in biology, I boarded a plane to move to a part of the world I had never been to and where I knew no one.  I had landed a job as a high school biology teacher at <a href="http://www.newyorker.com/magazine/2006/09/04/deerfield-in-the-desert" target="_blank"> a very interesting place</a> indeed.  Six years later, now living in <a href="https://www.nytimes.com/interactive/2017/01/26/travel/what-to-do-36-hours-in-santiago-chile.html?_r=0" target="_blank">another foreign land</a>, and after years of teaching not just biology, but some math too, I realized that as much as I loved the classroom, I was curious about what else I could be doing.  I had begun taking online classes in programming and machine learning purely out of curiousity when I decided to take the plunge and attend <a href="https://www.gracehopper.com/" target="_blank">an immersive coding bootcamp. </a> After graduating, I was selected to be a teaching fellow for the next cohort of students.</p>
          <p> Moving foward, I look to be programming for an organization whose mission I am passionate about.  I am particularly interested in applying my software engineering and data analytics skills in education, biological research, or healthcare.  Wherever I go, I will always be teaching and learning.  </p>
          <p> If you're interested in reading my resume, you can download it here:
          <a className="icon" href="../../Maria_Schreiber_Resume.pdf" download>
            <i className="fa fa-file-pdf-o" />
          </a> </p>

        </div>
        <div className="col-md-3 center">
          <figure>
            <img src="../../images/geo.png" style={{ height: 250 + 'px', padding: 2 + '%', borderRadius: 1 + '%'}} />
            <figcaption><p>Some more of my former students.  *I did not make them pose for this photo.*</p></figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
)

export default Background
