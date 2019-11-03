import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import Recent from "../components/Recent";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section hero-body is-fullheight">
      <div className="container">
        <div className="columns is-centered is-variable is-8">
          <div className="column is-3" style={{ paddingRight: "5%" }}>
            <h4 className="title is-4">BeResourceful Blog</h4>
            <p>
              Accelerating the construction industry's sustainable transition
            </p>
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
                    placeholder="email address"
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
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn"
                    style={{ width: "40%", padding: "8px 16px 6px" }}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="column is-9">
            {helmet || ""}
            <div className="container content">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                    {title}
                  </h1>
                  <p>{description}</p>
                  <PostContent content={content} />
                  {tags && tags.length ? (
                    <div style={{ marginTop: `4rem` }}>
                      <h4>Tags</h4>
                      <ul className="taglist">
                        {tags.map(tag => (
                          <li key={tag + `tag`}>
                            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
