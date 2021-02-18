import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p> I'm an Undergraduate sophomore currently undertaking  Bachelors course in electronics and communication. I love to learn new things and share my knowledge in this journey with all friends and peers </p>
                    <p>I'm Deeply passionate in Open source and management.Trying to Explore different fields of interest like (Finance,Strategy Management) </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Here Are Some Of My Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>Design And Analysing Algorithms  </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Languages</h3>
                    <p>C|C++|Python|Go|Sql|Assembly</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-plug" />
                </span>
                <div className="desc">
                    <h3>Frameworks</h3>
                    <p>Django|FastAPI</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-git" />
                </span>
                <div className="desc">
                    <h3>Tools</h3>
                    <p>Git|Linux|Nmap|MySql|Ghidra </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-star3" />
                </span>
                <div className="desc">
                    <h3>Problem Solving</h3>
                    <p>Real Innovation is About Solving Problem </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-user" />
                </span>
                <div className="desc">
                    <h3>Other Skills</h3>
                    <p>Technical Writing|Strategy Management|Financial Literate</p>
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
