import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

import smartcity from "../img/smart-city-1.png";
import dataenhance from "../img/dataenhance.png";
import alertrepair from "../img/alertrepair.png";

import fblogo from "../img/futureboxpng.png";
import fotlogo from "../img/fot-logo.png";
import disielogo from "../img/disie-logo.png";
import pilogo from "../img/pi-logo.png";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div className="margin-top-50">
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
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
        <h1 className="has-text-weight-bold is-size-3 header-bg has-text-centered">
          {title}
        </h1>
        <div className="is-vertical-center">
          <h3 className="has-text-weight-bold is-size-5 header-bg has-text-centered">
            {subheading}
          </h3>
        </div>
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/product">
              Tell me how!
            </Link>
          </div>
        </div>
      </div>
    </div>

    <section className="section-trust">
      <div className="container padding-10">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h3 className="has-text-weight-semibold is-size-4 has-text-centered">
              Trusted by
            </h3>
          </div>
        </div>
        <div className="columns is-10 is-centered is-vcentered">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-3 has-text-centered">
                <img src={fblogo} alt="Futurebox" style={{ width: "140px" }} />
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src={fotlogo}
                  alt="Dansk Industri"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src={pilogo}
                  alt="Dansk Industri"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="column is-3 has-text-centered">
                <img
                  src={disielogo}
                  alt="Dansk Industri"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
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
                  <div className="tile">
                    <h1 className="title">
                      Detect damages early before it is visible and{" "}
                      <u>8x more expensive</u> to repair
                    </h1>
                  </div>

                  <div className="columns">
                    <div className="column is-6">
                      <h4 className="h4-bg">Damages detected too late</h4>
                      <p className="padding-left-10">
                        Before, damages got detected when visible, which ment it
                        had already spread and destroyed the affected element
                        and its surroundings
                      </p>
                    </div>
                    <div className="column is-6">
                      <h4 className="h4-bg">Wasted manual checks</h4>
                      <p className="padding-left-10">
                        Lots of time and resources is wasted periodically
                        checking elements and paying external companies to check
                        the condition of buildings
                      </p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/cases">
                        Read case
                      </Link>
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
        <div className="">
          <div className="columns">
            <div className="column is-10 is-offset-1 section-how">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      How it works
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="columns has-text-centered">
                  <div className="column is-4 primary-box has-text-centered">
                    <div>
                      <img
                        src={smartcity}
                        alt="BeResourceful"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div>
                      Gather data with long lasting sensors in a mesh network
                    </div>
                  </div>
                  <div className="column is-4 primary-box has-text-centered">
                    <div>
                      <img
                        src={dataenhance}
                        alt="BeResourceful"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div>
                      Analyze, enhance & transform data in our data platform
                    </div>
                  </div>
                  <div className="column is-4 primary-box has-text-centered">
                    <div>
                      <img
                        src={alertrepair}
                        alt="BeResourceful"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div>
                      Alert & advise the facility manager to take preventive
                      action
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/product">
                      Product info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-third">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    <Link to="/blog">Latest stories</Link>
                  </h3>
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
