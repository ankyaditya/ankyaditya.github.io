import React, { Component, Fragment } from "react";
import myImage from "../img/myImage.png";
import beginner_image from "../img/beginner.png"
import intermediate_image from "../img/intermediate.png"

class About extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Flask_skill",
          content: "Flask",
          level: beginner_image,
          value: "80"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          level: intermediate_image,
          value: "75"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          level: beginner_image,
          value: "90"
        },
        {
          id: "PHP_skill",
          content: "PHP",
          level: intermediate_image,
          value: "70"
        },
        {
          id: "Python_skill",
          content: "Python",
          level: intermediate_image,
          value: "75"
        }
      ],
      skills2: [
        {
          id: "MySQL_skill",
          content: "MySQL",
          level: intermediate_image,
          value: "85"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB",
          level: beginner_image,
          value: "80"
        },
        {
          id: "Matlab_skill",
          content: "Matlab",
          level: intermediate_image,
          value: "80"
        },
        {
          id: "C_skill",
          content: "C",
          level: intermediate_image,
          value: "80"
        },
        {
          id: "Java_skill",
          content: "Java",
          level: intermediate_image,
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "enthusiastic in programming. I have the excellence in backend programming and also interested in DevOps. I can understand quickly and able to cooperate in pressure"
        },
        {
          id: "second-p-about",
          content:
            "With over one years of experience developing web applications using the latest front-end and back-end technologies."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6" style={{ marginTop: "auto", marginBottom: "auto" }}>
                    <div
                      className="col-sm-6 col-md-7"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                          src={myImage}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <Fragment key={skill.id}>
                            <span className="title-s">{skill.content}</span>{" "}
                            <img src={skill.level} className="pull-right"></img>
                            <div className="progress"></div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="skill-mf">
                      {this.state.skills2.map(skill => {
                        return (
                          <Fragment key={skill.id}>
                            <span className="title-s">{skill.content}</span>{" "}
                            <img src={skill.level} className="pull-right"></img>
                            <div className="progress"></div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
