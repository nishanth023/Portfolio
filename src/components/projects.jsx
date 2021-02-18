import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
		<div>
     
        <section className="colorlib-about"data-section="projects">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Projects</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3>Omr Reader <a href="https://github.com/nishanth023/Omr_reader" ><i className="     icon-link2" /></a></h3>

                    <p>Omr reader Project helps in analysing omr sheet with images and  generates output in the form of Excel sheet . this build using FastApi and Ml-Model is build with OpenCV </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3>Cloud Base <a href="https://github.com/nishanth023/CloudBase" ><i className="     icon-link2" /></a></h3>
                    <p>This project helps in creating a simple backend application for IoT based projects, supports real-time mesaging and real-time database</p>

                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                               <div className="desc">
                    <h3>Cli Chat Application <a href="https://github.com/nishanth023/Cli_chat" ><i className="     icon-link2" /></a></h3>
                    <p>A simple Command Line Interface Python Chat Application,This simply creates a Chatroom in which a server and clients can send and receive messages from each other.</p>
                </div>
                </div>
            </div>
             
            </div>
        </div>
        </section>
      </div>
		)
  }
}
