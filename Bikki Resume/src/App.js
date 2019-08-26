import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="top-part">
        <div className="name-designation">
          <p className="my-name">Bikki Mahato</p>
          <p className="designation">Associate Software Engineer</p>
        </div>
        <div className="my-image">

        </div>
        <div className="contacts">
          <p>Contact:<b> +91 8100147475</b></p>
          <p>Mail:<b><a className="mail-me" href={`mailto:${"bikkimahato123@gmail.com"}`}> bikkimahato123@gmail.com</a> </b></p>
          <p>Website:<a href="https://www.linkedin.com/in/bikkimahato" target="_blank" rel="noopener noreferrer"><b>
             https://www.linkedin.com/in/bikkimahato</b></a>
          </p>
        </div>
      </div>
      
      <div className="experience">
        EXPERIENCE - 1 Months
    </div>



      <div className="main-content">
        <div>
          <div className="organization">
            <b>GoodWorkLabs</b>, Bangalore - <em>Associate Software Engineer</em>
          </div>
          <div className="work-date">
            AUG 2019 - PRESENT
            </div>
          <ul>
            <li>Responsible for developing the user interface using primarily ReactJS</li>
          </ul>
        </div>
        <div className="summary-section">
          <b>SUMMARY</b>
          <p className="summary-paragragh">
            Energetic software engineer
            with 1 months experience
            developing robust code for
            high-volume businesses.
                <br /><br />
            An enthusiastic team player
            and deep creative thinker.
            </p>
        </div>
      </div>



      <div className="projects-skills">
        <div className="project-list">

          <b> <p style={{ color: "dodgerblue", margin: "0px 0px 16px 0" }}>PROJECTS</p></b>
          <div className="project-1">
            <b>Cook Smart</b>
            <p>
              The objective of the app is that it will ask for ingredient names from user and will recommend a
              dish that can be prepared with those items. Project was done using Android Studio and Java.
                </p>
          </div>
        </div>

        <div className="skills-section">
          <b>SKILLS</b>
          <div className="skills">
            <p>
              Java, SQL
                    <br /><br />
              JavaScript, ReactJS
                    <br /><br />
              HTML5, CSS3
                    <br /><br />
              Linux, Android Studio 3.1.3
                </p>
          </div>
        </div>
      </div>

      <div className="education-awards-section">
        <div className="education-section">
          <b style={{ color: "dodgerblue", fontSize: "1.2em" }}>EDUCATION</b>
          <ul className="education-list">
            <li><b>Academy of Technology</b>, Kolkata - B.Tech in IT</li>
            <dl>June 2019 - August 2015 | CGPA - 8.61</dl>
            <li><b>Little Star High School</b>, Howrah - Higher Secondary</li>
            <dl>June 2014 - June 2015 | Percentage - 80 %</dl>
            <li><b>Little Star High School</b>, Howrah - Secondary Eductaion</li>
            <dl>June 2012 - June 2013 | Percentage - 89.83 %</dl>
          </ul>
        </div>
        <div className="awards-section">
          <b style={{ color: "dodgerblue", fontSize: "1.2em" }}>AWARDS</b>
          <div className="awards-list">
            <p>
              1st Runner Up in Intra College Volleyball Tournament.
                </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
