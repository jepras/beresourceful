import React from "react";

import { Link } from "gatsby";

import Layout from "../../components/Layout";
import BlogRollBlog from "../../components/BlogRoll-blog";
import Recent from "../../components/Recent";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section hero-body is-fullheight">
          <div className="container">
            <div className="columns is-centered is-variable is-8">
              <div className="column is-3" style={{ paddingRight: "5%" }}>
                <h4 className="title is-4">BeResourceful Blog</h4>
                <p>
                  Accelerating the construction industry's sustainable
                  transition
                </p>
                &nbsp;
                <h5 className="title is-5">Recent posts</h5>
                <Recent />
                &nbsp;
                <h4 className="title is-5">Get updates</h4>
                <link
                  href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
                  rel="stylesheet"
                  type="text/css"
                />
                <div id="mc_embed_signup">
                  <form
                    action="https://jepras.us14.list-manage.com/subscribe/post?u=671c8542725c29d88f8ea0ec8&amp;id=68af9e2d0f"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    novalidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="Email address"
                        className="input"
                        required
                        style={{ width: "60%" }}
                      />

                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_671c8542725c29d88f8ea0ec8_68af9e2d0f"
                          tabindex="-1"
                          value=""
                        />
                      </div>

                      <Link
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="btn"
                        style={{ width: "40%", padding: "8px 16px 6px" }}
                      >
                        Send
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="content column is-9">
                <BlogRollBlog />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
