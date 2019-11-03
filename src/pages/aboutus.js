import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import bglogo from "../img/br-header-logo2.png";

import world from "../img/world.png";
import waste from "../img/waste.png";

import smartHome from "../img/smarthome.png";
import ecology from "../img/ecology.png";

import jeppe from "../img/br-jeppe.png";
import claes from "../img/br-claes.png";

import christian from "../img/christian.jpeg";
import manuel from "../img/manuel.jpeg";
import amit from "../img/amit.jpeg";
import lone from "../img/lone.jpeg";
import preben from "../img/preben.jpeg";

const AboutUs = ({}) => {
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
              On a journey to make the construction industry sustainable
            </h1>
            <div className="is-vertical-center">
              <h3 className="has-text-weight-bold is-size-5 header-bg">
                When we saw the enormous CO2 footprint the construction and
                building industry has - we realized we had to step up and create
                a solution to end that waste.
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
                <div className="columns">
                  <div className="column is-6">
                    <div className="columns">
                      <div className="column is-3">
                        <img
                          src={world}
                          alt="Dansk Industri"
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="column is-9">
                        <p style={{ fontSize: "2rem" }}>39%</p>
                        <p>
                          {" "}
                          of global C02 emissions stem from the building and
                          construction industry
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="columns">
                      <div className="column is-3">
                        <img
                          src={waste}
                          alt="Dansk Industri"
                          style={{ width: "100px" }}
                        />
                      </div>
                      <div className="column is-9">
                        <p style={{ fontSize: "2rem" }}>54%</p>
                        <p> of construction materials end in a landfill</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column-vertical-gap">
                  <div className="content">
                    <h1>
                      BeResourceful emerged from an impact bootcamp focusing on
                      limiting global warming to 1.5°C
                    </h1>
                  </div>
                  <div className="columns content">
                    <div className="column is-9">
                      <div className="content">
                        <p>
                          As we dug into the research and talked to experts from
                          the entire construction industry, we realized the 2
                          main reasons building owners don't reuse their
                          materials is because{" "}
                          <ol type="a">
                            <li>
                              they don't know what components they have in their
                              buildings and{" "}
                            </li>
                            <li>in what condition their materials are in.</li>
                          </ol>
                          What is missing is an{" "}
                          <Link
                            className="has-text-weight-bold"
                            to="https://www.bamb2020.eu/news/publication-materials-passports/"
                          >
                            active material passport
                          </Link>{" "}
                          that follows the building components throughout their
                          entire lifetime.{" "}
                        </p>
                        <p>
                          The industry have screamed for{" "}
                          <Link
                            className="has-text-weight-bold"
                            to="https://issuu.com/3xnarchitects/docs/buildingacircularfuture"
                          >
                            active monitoring
                          </Link>
                          , but said it wasn't possible technically.
                        </p>
                        <p>Until now..</p>
                      </div>
                    </div>
                    <div className="column is-3 is-vertical-center">
                      <img
                        src={smartHome}
                        alt="Material Passport"
                        style={{ width: "200px", opacity: "0.2" }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="content column-vertical-gap">
                    <div className="columns content">
                      <div className="column is-5 is-vertical-center">
                        <img
                          src={ecology}
                          alt="Ecology"
                          style={{ width: "200px", opacity: "0.2" }}
                        />
                      </div>
                      <div className="column is-7">
                        <div className="content">
                          <h1>From vision to implementation</h1>
                          <h4 className="h4-bg">Vision</h4>
                          <p>
                            Accelerate the construction industry's sustainable
                            transition
                          </p>
                          <h4 className="h4-bg">Mission</h4>
                          <p>
                            Use technology to gather data about buildings to
                            enable better use of resources
                          </p>
                          <h4 className="h4-bg">What we do</h4>
                          <p>
                            BeResourceful has created the first IoT solution
                            that allows real-time monitoring of building
                            elements. Our sensors detect damages as they occur
                            and send out alarms for Facility Managers. <br />
                            <br />
                            Our sensors are installed in minutes on the critical
                            areas identified and you decide the frequency of
                            component health reports you want. This solution
                            reduces the costly labour involved in manually
                            checking components periodically and ensures you
                            avoid the need for big repairs as it happens when
                            you detect damages too late. <br />
                            <br />
                            By doing so, BeResourceful extends the lifetime of
                            resources and minimises the amount of resources
                            needed for renovations.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="content has-text-centered column-vertical-gap">
                  <h1>The team to make this change possible</h1>
                  <div className="columns has-text-centered">
                    <div className="column is-6">
                      <div>
                        <img
                          style={{ borderRadius: "1000px", height: "400px" }}
                          src={jeppe}
                          alt="jeppe"
                        />
                      </div>
                      <h1 className="h4-bg">Jeppe Rasmussen</h1>
                      <h4>CEO</h4>
                      <p className="team-title">
                        Bringing project management & software experience from
                        Microsoft to create a secure functioning software
                        product
                      </p>
                    </div>
                    <div className="column is-6">
                      <div>
                        <img
                          style={{ borderRadius: "1000px", height: "400px" }}
                          src={claes}
                          alt="claes"
                        />
                      </div>
                      <h1 className="h4-bg">Claes Jakobsen</h1>
                      <h4>CTO</h4>
                      <p className="team-title">
                        Bringing hardware experience from the world's leading
                        robotics hub, SDU, to accelerate the development of the
                        devices to make them reliable & accurate
                      </p>
                    </div>
                  </div>

                  <h1>Backed by proven industry achieved advisors</h1>

                  <div className="columns has-text-centered">
                    <div className="column">
                      <div>
                        <img
                          className="team-advisors"
                          src={preben}
                          alt="preben"
                        />
                      </div>
                      <h4 className="team-advisors-title">Preben Gramstrup</h4>
                      <p className="team-title">
                        Bringing +30 years of insights from working with
                        Facility Management
                      </p>
                    </div>
                    <div className="column">
                      <div>
                        <img
                          className="team-advisors"
                          src={christian}
                          alt="christian"
                        />
                      </div>
                      <h4 className="team-advisors-title">
                        Christian Arne Jørgensen
                      </h4>
                      <p className="team-title">
                        Bringing future insights from working with smart homes
                        since the 80's
                      </p>
                    </div>
                    <div className="column">
                      <div>
                        <img
                          className="team-advisors"
                          src={manuel}
                          alt="manuel"
                        />
                      </div>
                      <h4 className="team-advisors-title">Manuel Maestrini</h4>
                      <p className="team-title">
                        Bringing IoT startup experience from being CEO of
                        Nordsense
                      </p>
                    </div>
                    <div className="column">
                      <div>
                        <img className="team-advisors" src={lone} alt="lone" />
                      </div>
                      <h4 className="team-advisors-title">
                        Lone Møller Sørensen
                      </h4>
                      <p className="team-title">
                        Bringing decades of construction industry experience
                        from all parts of the value chain
                      </p>
                    </div>
                    <div className="column">
                      <div>
                        <img className="team-advisors" src={amit} alt="amit" />
                      </div>
                      <h4 className="team-advisors-title">Amit Lohiya</h4>
                      <p className="team-title">
                        Bringing impact business development from his years of
                        experience as CEO of Bloodlink
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container" id="contact">
                  <div className="content is-two-thirds">
                    <h1>Contact</h1>
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out: <input name="bot-field" />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"name"}>
                          Your name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={"text"}
                            name={"name"}
                            id={"name"}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"email"}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={"email"}
                            name={"email"}
                            id={"email"}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={"message"}>
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={"message"}
                            id={"message"}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <Link className="btn" type="submit">
                          Send
                        </Link>
                      </div>
                    </form>
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

export default AboutUs;
