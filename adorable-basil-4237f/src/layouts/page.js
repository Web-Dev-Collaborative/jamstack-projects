import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { htmlToReact, withPrefix, markdownify } from "../utils";

export default class Page extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="inner outer">
          <article className="post post-full">
            <header className="post-header inner-sm">
              <h1 className="post-title line-top">
                {_.get(this.props, "page.frontmatter.title", null)}
              </h1>
              {_.get(this.props, "page.frontmatter.subtitle", null) && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, "page.frontmatter.subtitle", null)
                  )}
                </div>
              )}
            </header>
            {_.get(this.props, "page.frontmatter.image", null) && (
              <div className="post-image">
                <img
                  src={withPrefix(
                    _.get(this.props, "page.frontmatter.image", null)
                  )}
                  alt={_.get(this.props, "page.frontmatter.image_alt", null)}
                />
              </div>
            )}
            <div className="post-content inner-sm">
              {markdownify(_.get(this.props, "page.markdown", null))}
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}
