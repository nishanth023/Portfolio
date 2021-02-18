import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Nishanth S</a></h1>
              <span className="email"><i className="icon-mail"></i> nishanth.ec19@bitsathy.ac.in</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#Projetcs" data-nav-section="projects">Projects</a></li>
                  {/*<li><a href="#Blog" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Certifications</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/nishanth-s-1b4a12191/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/nishanth023" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.codechef.com/users/t3min3r" target="_blank" rel="noopener noreferrer"><i className="icon-code"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  
              </small></p>
              <p><small>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
