import React, { Component, Fragment } from "react";
import myImage from "../img/myImage.png";

class About extends Component {
  state = {
    skills: [
      {
        id: "flaskSkill",
        content: "Flask"
      },
      {
        id: "nodejsSkill",
        content: "NodeJS"
      },
      {
        id: "reactjsSkill",
        content: "ReactJS"
      },
      {
        id: "phpSkill",
        content: "PHP"
      },
      {
        id: "pythonSkill",
        content: "Python"
      },
      {
        id: "golangSkill",
        content: "Golang"
      }
    ],
    skills2: [
      {
        id: "mysqlSkill",
        content: "MySQL"
      },
      {
        id: "mongodbSkill",
        content: "MongoDB"
      },
      {
        id: "redisSkill",
        content: "Redis"
      },
      {
        id: "dockerSkill",
        content: "Docker"
      },
      {
        id: "kubernetesSkill",
        content: "Kubernetes"
      },
      {
        id: "elastichSearchSkill",
        content: "Elastic Search"
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
          "With over one years of experience developing applications and web services using the latest front-end and back-end technologies."
      }
    ]
  };


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
                      {this.state.skills.map(skill => {
                        return (
                          <Fragment key={skill.id}>
                            <span className="title-s">{skill.content}</span>{" "}
                            <div className="progress" style={{height: ".15rem"}}></div>
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
                            <div className="progress" style={{height: ".15rem"}}></div>
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
