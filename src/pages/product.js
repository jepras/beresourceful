import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import bglogo from "../img/br-header-logo2.png";

import caseoverview from "../img/caseoverview.png";
import casealarm from "../img/casealarm.png";
import dashboard from "../img/dashboard.png";

const Product = () => (
  <Layout>
    <div className="margin-top-50">
      <section
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${bglogo})`,
          backgroundPosition: `top left`
          /* backgroundAttachment: `fixed` */
        }}
      >
        <div
          style={{
            display: "flex",
            height: "250px",
            width: "700px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
            padding: "10px"
          }}
        >
          <h1 className="has-text-weight-bold is-size-3 header-bg">
            Do you feel your maintenance could be more efficient?
          </h1>
          <div className="is-vertical-center">
            <h3 className="has-text-weight-bold is-size-5 header-bg">
              Find out our how our solution makes Facility Managers save time &
              how it makes building owners save money yearly on reparations.
            </h3>
          </div>
        </div>
      </section>

      <section className="section-trust">
        <div className="container padding-10">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title has-text-centered">
                A complete IoT solution from damage detection to notification
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gradient">
        <div className="container">
          <div className="section-first">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile"></div>

                    <div className="columns level">
                      <div className="column is-4 level-item">
                        <h4 className="h4-bg">Set up sensors</h4>
                        <p className="padding-left-10">
                          In minutes we identify & setup the sensors on critical
                          areas that accurately measures if the element is
                          taking water.
                        </p>
                      </div>
                      <div className="column is-8">
                        <img
                          src={caseoverview}
                          className="case-img"
                          alt="caseoverview"
                        />
                      </div>
                    </div>

                    <div className="columns level">
                      <div className="column is-8">
                        <img
                          src={dashboard}
                          className="case-img"
                          alt="dashboard"
                        />
                      </div>
                      <div className="column is-4 level-item">
                        <div className="row">
                          <h4 className="h4-bg">Gather & transform data</h4>
                        </div>
                        <div className="row">
                          <p className="padding-left-10">
                            Gather data at intervals you decide to have an
                            overview of your building components health for the
                            next decade.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="columns level">
                      <div className="column is-4 level-item">
                        <h4 className="h4-bg">Send alarms</h4>
                        <p className="padding-left-10">
                          When the sensors detect abnormal behaviour it sends
                          out alarms in the way you prefer to receive it:
                          through your FM software, email or sms.
                        </p>
                      </div>
                      <div className="column is-8">
                        <img
                          src={casealarm}
                          className="case-img"
                          alt="casealarm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 section-how">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Frequently Asked Questions
                    </h3>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-12">
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">
                          How long does the battery last?
                        </p>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          Current batterytechnology allows for 5 years at the
                          moment, but batterytechnology allows us to reach 10
                          years and soon the sensors can outlast buildings.
                        </div>
                      </div>
                    </div>
                    <p></p>
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">
                          How many sensors are needed per building?
                        </p>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          It depends on the use-case and the size of the
                          building, but after talking to multiple Facility
                          Management experts we see that 15-20 sensors in
                          average usually covers 90% of vulnerable areas where
                          damages can occur
                        </div>
                      </div>
                    </div>
                    <p></p>
                    <div className="card">
                      <header className="card-header">
                        <p className="card-header-title">
                          Where can I put these sensors?
                        </p>
                      </header>
                      <div className="card-content">
                        <div className="content">
                          The sensors can measure moisture level in all wood
                          elements. Some places customers have requested
                          sensors:
                          <ol>
                            <li>
                              In the rafter underneath roof construction to
                              detect leakage from holes
                            </li>
                            <li>
                              In facadeelements close to drain pipes to ensure
                              their overflowing doesn't damage the apartment
                            </li>
                            <li>
                              Underneath the bathroom tiles to prevent pipes
                              leaking
                            </li>
                            <li>
                              Under the washing machines to ensure that pipes
                              and hoses are properly attached and not leaking
                            </li>
                          </ol>
                          <p></p>
                          Basically anywhere people have experienced water
                          damages and want to prevent it from happening again.
                        </div>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/aboutus#contact">
                      Contact to hear how we can help you
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p></p>
    </div>
  </Layout>
);

export default Product;
