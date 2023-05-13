import React, { Component } from 'react'


export class ProtfolioComponent extends Component {
  render() {
    return (
      <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>NAVYA</h1>
            {/* <img src="assests/images/o1.jfif" alt="HTML" style="width: 100px; height: 100px; border-radius: 50%; padding: left 100px;"> */}
        <p class="lead"></p>
      </div>
      <div class="col-md-4">
        <ul class="list-unstyled">
          <li>Email: navyavenkat03@gmail.com</li>
          <li>Phone:987654321</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>About Me</h2>
        <p>A highly motivated Learner  with technical Knowledege</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>Skills</h2>
        <ul>
        
          <li>PYTHON</li>
          <li>C PROGRAMMING</li>
          <li>C#</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>Experience</h2>
        <ul>
         
          <li>COMPLETED 3 MONTHS OF TRAINING IN Frontend</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      {/* <div class="col-md-8">
        <h2>Projects</h2>
        <ul>
          <li>Project 1:Explotary Data analysis</li>
          <li>Project 2: Ecg heart rate sensor</li>
          <li>Project 3: WIKIPEDIA BOT USING THREAD IN PYTHON LANG</li>
        </ul>
      </div> */}
    </div>
  </div>
    ) 
  }
}

export default ProtfolioComponent
