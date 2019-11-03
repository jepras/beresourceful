import React from "react";
import Layout from "../components/Layout";

import bglogo from "../img/br-header-logo2.png";

import caseoverview from "../img/caseoverview.png";
import casealarm from "../img/casealarm.png";

const Cases = ({}) => {
  return (
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
              How do we provide value?
            </h1>
            <div className="is-vertical-center">
              <h3 className="has-text-weight-bold is-size-5 header-bg">
                Learn how our building monitoring solution has helped our
                clients save money while improving services. See how we can help
                you create value and save costs.
              </h3>
            </div>
          </div>
        </section>

        <section className="section-about">
          <div className="container padding-10">
            <div className="columns is-centered is-vcentered">
              <div
                className="column"
                style={{ padding: "0px 100px 0px 100px" }}
              >
                <div className="column-vertical-gap">
                  <div className="content">
                    <h1>Case - Folk High School</h1>
                  </div>
                  <div className="columns content">
                    <div className="column">
                      <div className="content">
                        <p>
                          The folk high school had been through a bigger
                          renovation of their building's roof due to moisture
                          related damages that made the rafts unusable, but they
                          had a listed building left they wanted to keep alive
                          to prevent further millions being used on roof
                          renovations.
                        </p>
                        <h3>Challenge</h3>
                        <p>
                          At the other rooftops it wasn't discovered when the
                          rainwater came in through the roof and made the raft
                          beneath moist.
                        </p>
                        <p>
                          The rooftops are not always easily accessible and
                          therefore is not a place Facility Managers usually
                          check.
                        </p>
                        <p>
                          Due to that, the Facility Manager of the folk high
                          school asked for a way to be alarmed when these
                          critical elements beings to absorb water, instead of
                          detecting the damage late as they are used to.
                        </p>
                        <h3>Solution</h3>
                        <p>
                          The folk high school uses BeResourceful's sensor &
                          data solution to automatically monitor the moistening
                          of wood in critical areas of their building
                        </p>
                        <p>
                          Sensors will be put around areas previously affected,
                          such as at the ridge, around the window, the valley
                          rafter and by the chimney
                        </p>
                        <img
                          className="case-img"
                          src={caseoverview}
                          alt="caseoverview"
                        />
                        <p>
                          Doing so, the Facility Manager can now always access
                          the condition of his components through his FM
                          software or by setting up alarms so he gets
                          immediately notified by mail or sms if moistening is
                          happening
                        </p>
                        <img
                          className="case-img"
                          src={casealarm}
                          alt="casealarm"
                        />
                        <h3>Gains</h3>
                        <p>
                          By using BeResourceful's solution can the Facility
                          Manager be reassured knowing that his building is in
                          good condition and that he will know immediately when
                          damages occur.
                        </p>
                        <ul>
                          <li>
                            Save time and resources by not having to manually
                            check the building for damage periodically
                          </li>
                          <li>
                            Save costs by not having an external condition
                            report made by vendors
                          </li>
                          <li>
                            Get a dynamic overview of his building through
                            existing FM tools
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cases;
