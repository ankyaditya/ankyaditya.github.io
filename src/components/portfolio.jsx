import React, { Component, Fragment } from "react";

import {
  safet, safet2, safet3, safet4, safet5, safet6, safet7, safet8, safet9, safet10, safet11, safet12, safet13, safet14, safet15, safet16, safet17, safet18, safet19, safet20, safet21,
  vpbx, vpbx2, vpbx3, vpbx4, vpbx5, vpbx6, vpbx7, vpbx8, vpbx9, vpbx10, vpbx11, vpbx12, vpbx13, vpbx14, vpbx15, vpbx16,
  iod, iod2, iod3, iod4, iod5, iod6, iod7,
  bod, bod2, bod3, bod4, bod5, bod6, bod7, bod8,
  roompi, roompi2, roompi3, roompi4, roompi5,
  daloradius, daloradius2, daloradius3
} from "../img/image"

const safet_image = [safet2, safet3, safet4, safet5, safet6, safet7, safet8, safet9, safet10, safet11, safet12, safet13, safet14, safet15, safet16, safet17, safet18, safet19, safet20, safet21]
const vpbx_image = [vpbx2, vpbx3, vpbx4, vpbx5, vpbx6, vpbx7, vpbx8, vpbx9, vpbx10, vpbx11, vpbx12, vpbx13, vpbx14, vpbx15, vpbx16]
const iod_image = [iod2, iod3, iod4, iod5, iod6, iod7]
const bod_image = [bod2, bod3, bod4, bod5, bod6, bod7, bod8]
const roompi_image = [roompi2, roompi3, roompi4, roompi5]
const daloradius_image = [daloradius2, daloradius3]

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: [
        {
          id: "Safe-T_portfolio",
          name: "Safe-T",
          category: "ReactJS Node JS Android TensorFlow",
          image: safet,
          image_file: safet_image
        },
        {
          id: "VirtualPBX_portfolio",
          name: "VirtualPBX",
          category: "HTML CSS Bootstrap JavaScript Flask Asterisk",
          image: vpbx,
          image_file: vpbx_image
        },
        {
          id: "IoD_portfolio",
          name: "Internet on Demand",
          category: "HTML CSS Bootstrap JavaScript Express Golang",
          image: iod,
          image_file: iod_image
        },
        {
          id: "BoD_portfolio",
          name: "Bandwidth on Demand",
          category: "HTML CSS Bootstrap JavaScript CodeIgniter",
          image: bod,
          image_file: bod_image
        },
        {
          id: "RoomPi_portfolio",
          name: "RoomPi",
          category: "HTML CSS Bootstrap JavaScript CodeIgniter",
          image: roompi,
          image_file: roompi_image
        },
        {
          id: "daloRadius_portfolio",
          name: "daloRadius",
          category: "HTML CSS Bootstrap JavaScript PHP",
          image: daloradius,
          image_file: daloradius_image
        },
      ]
    }
  }
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Check Out My Latest Projects.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.portfolios.map(portfolio => {
              return (
                <Fragment key={portfolio.id}>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={portfolio.image} data-lightbox={"gallery-" + portfolio.name}>
                        <div className="work-img">
                          <img src={portfolio.image} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">{portfolio.name}</h2>
                            <div className="w-more">
                              <span className="w-ctegory">
                                {portfolio.category}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {portfolio.image_file.map(image => (
                        <a
                          href={image}
                          data-lightbox={"gallery-" + portfolio.name}
                          style={{ display: "none" }}
                        ></a>
                      ))}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
