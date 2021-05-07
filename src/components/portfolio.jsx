import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import MyVerticallyCenteredModal from './modal'

import {
  safet, safet2, safet3, safet4, safet5, safet6, safet7, safet8, safet9, safet10, safet11, safet12, safet13, safet14, safet15, safet16, safet17, safet18, safet19, safet20, safet21, 
  safet22, safet23, safet24, safet25, safet26, safet27, safet28, safet29, safet30,
  vpbx, vpbx2, vpbx3, vpbx4, vpbx5, vpbx6, vpbx7, vpbx8, vpbx9, vpbx10, vpbx11, vpbx12, vpbx13, vpbx14, vpbx15, vpbx16,
  iod, iod2, iod3, iod4, iod5, iod6, iod7, iod8,
  bod, bod2, bod3, bod4, bod5, bod6, bod7, bod8,
  roompi, roompi2, roompi3, roompi4, roompi5,
  daloradius, daloradius2, daloradius3,
  agreefisheries, agreefisheries2, agreefisheries3, agreefisheries4, agreefisheries5, agreefisheries6, agreefisheries7, agreefisheries8, agreefisheries9, agreefisheries10, 
  agreefisheries11, agreefisheries12, agreefisheries13, agreefisheries14, agreefisheries15, agreefisheries16, agreefisheries17, agreefisheries18, agreefisheries19, agreefisheries20,
  agreefisheries21, agreefisheries22, agreefisheries23, agreefisheries24, agreefisheries25, agreefisheries26, agreefisheries27, agreefisheries28, agreefisheries29, agreefisheries30,
  agreefisheries31, agreefisheries32, agreefisheries33, agreefisheries34, agreefisheries35, agreefisheries36,
  majoocrm, majoocrm2, majoocrm3, majoocrm4, majoocrm5, majoocrm6, majoocrm7, majoocrm8, majoocrm9, majoocrm10, majoocrm11, majoocrm12, majoocrm13, majoocrm14, majoocrm15, majoocrm16, 
  majoocrm17, majoocrm18
} from "../img/image"

const safet_image = [safet2, safet3, safet4, safet5, safet6, safet7, safet8, safet9, safet10, safet11, safet12, safet13, safet14, safet15, safet16, safet17, safet18, safet19, safet20,
  safet21, safet22, safet23, safet24, safet25, safet26, safet27, safet28, safet29, safet30]
const vpbx_image = [vpbx2, vpbx3, vpbx4, vpbx5, vpbx6, vpbx7, vpbx8, vpbx9, vpbx10, vpbx11, vpbx12, vpbx13, vpbx14, vpbx15, vpbx16]
const iod_image = [iod2, iod3, iod4, iod5, iod6, iod7, iod8]
const bod_image = [bod2, bod3, bod4, bod5, bod6, bod7, bod8]
const roompi_image = [roompi2, roompi3, roompi4, roompi5]
const daloradius_image = [daloradius2, daloradius3]
const agreefisheries_image = [agreefisheries2, agreefisheries3, agreefisheries4, agreefisheries5, agreefisheries6, agreefisheries7, agreefisheries8, agreefisheries9, agreefisheries10, 
  agreefisheries11, agreefisheries12, agreefisheries13, agreefisheries14, agreefisheries15, agreefisheries16, agreefisheries17, agreefisheries18, agreefisheries19, agreefisheries20,
  agreefisheries21, agreefisheries22, agreefisheries23, agreefisheries24, agreefisheries25, agreefisheries26, agreefisheries27, agreefisheries28, agreefisheries29, agreefisheries30,
  agreefisheries31, agreefisheries32, agreefisheries33, agreefisheries34, agreefisheries35, agreefisheries36]
const majoocrm_image = [majoocrm2, majoocrm3, majoocrm4, majoocrm5, majoocrm6, majoocrm7, majoocrm8, majoocrm9, majoocrm10, majoocrm11, majoocrm12, majoocrm13, majoocrm14, majoocrm15,
   majoocrm16, majoocrm17, majoocrm18]

class Portfolio extends Component {
  state = {
    modalShow: false,
    portfolios: [
      {
        id: "agreeFisheriesPortfolio",
        name: "Agree Fisheries",
        category: "Node JS Kafka ELK Kotlin MongoDB Redis",
        description: "Agree Fisheries is a mobile-based application that is expected to simplify the supply chain, make fish farmers more prosperous, get an offtaker based on farmer groups, lower costs, and make selling prices higher. Agree Fisheries makes it easy for fisherman/fish cultivators to become supplier partners in the fishery ecosystem. They can use Agree Fisheries to register as a supplier partner for a fishing company. After being qualified as partners, they can get access to Agree Fisheries features, namely Activity Monitoring Access (manage all fishery activities easily), Access to Partnership Modal (assistance and funding), Marketing Analysis (commodities, groups, also fish production and distribution). Agree Fisheries is here to provide integrated fisheries ecosystem solutions by providing access to sales, modal, business analysis, and fisheries technology.",
        user_target: "Fisherman and Fish Cultivator",
        participated: "Develop APIs for Agree fisheries feature, Integrate existing services with fisheries feature, Create unit testing in the code written, Analyze and refactor existing services to be more dynamic and easier to scale up in the next development",
        link: "https://play.google.com/store/apps/details?id=com.agree.fisheries",
        image: agreefisheries,
        image_file: agreefisheries_image,
        hover: false
      },
      {
        id: "majooCrmPortfolio",
        name: "Majoo CRM",
        category: "HTML CSS Bootstrap JavaScript CodeIgniter MySQL",
        description: "Majoo CRM is a web-based application that aims to connect all processes related to customers from customer search to complaints management in one container (Customer Relationship Management). Broadly speaking, the function of Majoo CRM is to streamline and simplify administrative procedures that are routinely carried out by the sales team into an automated and integrated system. It is also to facilitate recording and documentation of the Leads management process from canvassing until deal as a mitra in a consecutive process. And also to build a system that is easy to monitor and evaluate in terms of target achievement, performance, and constraints encountered.",
        user_target: "Company",
        participated: "Develop leads registration, rating potential leads, and activity leads history, Integrate leads module with payment and invoice modules, Develop update sales activity feature, Analyze and fixing bugs during tests",
        link: null,
        image: majoocrm,
        image_file: majoocrm_image,
        hover: false
      },
      {
        id: "safetPortfolio",
        name: "Safe-T",
        category: "ReactJS Node JS Android TensorFlow MySQL",
        description: "an intelligent application based on the Internet of Things (IoT) that can help the police to maximally enforce the law by involving active public participation. Safe-T is a mobile application and can work by detecting vehicle license plates. When the vehicle number plate has been detected, the user selects the detected license plate based on the vehicle that committed the violation. Based on these candidates, the algorithm on SAFE-T will perform automatic cropping of the license plate, followed by an optical character recognition (OCR) process. The results from the OCR will be sent to the database for matching vehicle identities. Then, the user will verify the data between the license plate and the data that stored in database. After this stage is complete, the data will be sent to the reporting database for further processing by the authorities.",
        user_target: "Public",
        participated: "Developed a deep learning model to detect number plate used in Mobile Apps using the TensorFlow framework, fixed a bug when adding new vehicle data, added parking feature, added a page to display data on violations that have been approved by the police, added incoming report chart and status report pie chart, As a project manager",
        link: "https://safe-t.netlify.app",
        image: safet,
        image_file: safet_image,
        hover: false
      },
      {
        id: "virtualPbxPortfolio",
        name: "VirtualPBX",
        category: "HTML CSS Bootstrap JavaScript Flask Asterisk MySQL",
        description: "a website-based application that provides Cloud PBX services for internal company use. By using Cloud PBX there are several advantages such as, customers don't need to pay for PBX devices & simplify the management of communication costs (cost-saving), free charge for calls between extension numbers, can make voice and video calls via softphone, can make multiuser conference calls. Cloud PBX services can be accessed by logging in using a Google account. Users can request PBX and purchase vouchers for wallet balance that will be used as an extension/PBX saldo. Users as the admin of the PBX can manage extensions such as, adding new extensions, enable/disable external calls, and enable/disable incoming outside calls to the PBX. Super admin can approve/reject PBX requests from users, manage PBX, add outbound numbers, and verify voucher payments.",
        user_target: "Company",
        participated: "Migrate VirtualPBX from GCP to internal Lab servers, Integrate VirtualPBX with SBC, added extension as an operator feature, added forwarded extension feature, added outbound number (CRUD) feature, add call log data on VirtualPBX, added wallet features, added Voucher feature, added payment charging system",
        link: null,
        image: vpbx,
        image_file: vpbx_image,
        hover: false
      },
      {
        id: "iodPortfolio",
        name: "Internet on Demand",
        category: "HTML CSS Bootstrap JavaScript Express Golang MongoDB",
        description: "a prototype portal for subscribing wifi based on internet speed. The IoD Services can provide internet speed according to the level of the employee's position. IoD services can be used by connecting the user's device to the IoD wifi network. Speed test can be used to check the internet speed obtained whether it is matching or not.",
        user_target: "Company / Retail",
        participated: "Make changes to the filterID from static to dynamic, creating a new user type/login for MITRA company, fix the user mapping bug for internet speed",
        link: null,
        image: iod,
        image_file: iod_image,
        hover: false
      },
      {
        id: "bodPortfolio",
        name: "Bandwidth on Demand",
        category: "HTML CSS Bootstrap JavaScript CodeIgniter MySQL",
        description: "a prototype portal for subscribing wifi based on internet bandwidth. BoD services can provide internet bandwidth according to the default bandwidth of the user or the bandwidth package purchased by the user. There are two kinds of packages, Duration-based Packages and Time-based Packages. Duration-based Packages allow users to flexibly upgrade internet speed according to a certain accumulated time (hours). You can disable/enable packages as needed. Time-based Packages allow users to enjoy upgraded internet speed within a certain period of time (days), not as flexible Duration-based Packages.",
        user_target: "Retail",
        participated: "Fixed bug in the process of purchasing bandwidth packages, fixed bug when adding new users, fixed bug when deleting user accounts, fixed bug in the process of stopping bandwidth packets in use",
        link: null,
        image: bod,
        image_file: bod_image,
        hover: false
      },
      {
        id: "roompiPortfolio",
        name: "RoomPi",
        category: "HTML CSS Bootstrap JavaScript CodeIgniter MySQL",
        description: "Is a website-based application that provides services for online meetings (audio conference). There are several advantages by using RoomPi such as, user friendly, simple management, and can make calls between participants (conference call). The RoomPi service can be accessed by logging in using a Facebook account or logging in with a registered account. Users can create a conference schedule by filling in the subject, type, time, and conference participants. After making a conference schedule, the system will send information to conference participants (conference id and pin) to join when the conference time arrives. The conference admin has several authorities, kicking participants, and hold/unhold connected participants.",
        user_target: "Company",
        participated: "Fixed bug sending email to conference participants, fixed bug connected participant display (not showing), fixed a bug on the process unsilence/silence speaker",
        link: null,
        image: roompi,
        image_file: roompi_image,
        hover: false
      },
      {
        id: "daloradiusPortfolio",
        name: "daloRadius",
        category: "HTML CSS Bootstrap JavaScript PHP MySQL",
        description: "is an advanced RADIUS web platform aimed at managing Hotspots and general-purpose ISP deployments. It features rich user management, graphical reporting, accounting, and integrates with GoogleMaps for geo-locating (GIS). daloRADIUS is written in PHP and JavaScript and utilizes a database abstraction layer which means that it supports many database systems, among them the popular MySQL, PostgreSQL, Sqlite, MsSQL, and many others.",
        user_target: "Company",
        participated: "Added tcpdump feature to daloRADIUS, added a feature to download files (.pcap) from the tcpdump process, make improvements to add & delete user data to PCRF",
        link: null,
        image: daloradius,
        image_file: daloradius_image,
        hover: false
      },
    ],
    selected_portfolio: {
      name: null,
      developed: null,
      description: null,
      user_target: null,
      participated: null,
      link: null,
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
                <MyVerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={() => this.setState({ modalShow: false })}
                  selected_portfolio={this.state.selected_portfolio}
                />
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.portfolios.map(portfolio => {
              return (
                <div className="col-md-4" key={portfolio.id}>
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
                          <ReactTooltip id={portfolio.id} place="bottom" effect="solid">
                            See Details
                          </ReactTooltip>
                            <span
                              className={portfolio.hover ? "ion-ios-plus" : "ion-ios-plus-outline"}
                              onMouseEnter={() => this.setState(prevState => ({
                                portfolios: prevState.portfolios.map(
                                  obj => (obj.id === portfolio.id ? Object.assign(obj, { hover: true }) : obj)
                                )
                              }))
                              }
                              onMouseLeave={() => this.setState(prevState => ({
                                portfolios: prevState.portfolios.map(
                                  obj => (obj.id === portfolio.id ? Object.assign(obj, { hover: false }) : obj)
                                )
                              }))
                              }
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                this.setState(prevState => ({
                                  modalShow: true,
                                  selected_portfolio: {
                                    name: portfolio.name,
                                    developed: portfolio.category,
                                    description: portfolio.description,
                                    user_target: portfolio.user_target,
                                    participated: portfolio.participated,
                                    link: portfolio.link
                                  }
                                }))
                              }
                              data-tip data-for={portfolio.id}>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {portfolio.image_file.map((image, i) => (
                      <a
                        key={i}
                        href={image}
                        data-lightbox={"gallery-" + portfolio.name}
                        style={{ display: "none" }}
                      ></a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
