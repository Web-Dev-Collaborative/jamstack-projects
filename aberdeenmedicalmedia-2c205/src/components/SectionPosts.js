import React from "react";
import _ from "lodash";
import moment from "moment-strftime";

import { getPages, Link, withPrefix } from "../utils";

export default class SectionPosts extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    let display_posts = getPages(this.props.pages, "/posts");
    return (
      <section id={_.get(section, "section_id", null)} className="posts">
        {_.map(
          _.orderBy(display_posts, "frontmatter.date", "desc"),
          (post, post_idx) => (
            <Link
              key={post_idx}
              href={withPrefix(_.get(post, "__metadata.urlPath", null))}
              className="article-teaser"
            >
              {_.get(post, "frontmatter.thumb_img_path", null) && (
                <img
                  className="thumbnail"
                  src={withPrefix(
                    _.get(post, "frontmatter.thumb_img_path", null)
                  )}
                  alt={_.get(post, "frontmatter.thumb_img_alt", null)}
                />
              )}
              <div className="copy">
                <h2>{_.get(post, "frontmatter.title", null)}</h2>
                <h3 className="publish-date">
                  Published on{" "}
                  {moment(_.get(post, "frontmatter.date", null)).strftime(
                    "%B %d, %Y"
                  )}
                </h3>
                {_.get(post, "frontmatter.excerpt", null) && (
                  <p className="summary">
                    {_.get(post, "frontmatter.excerpt", null)}
                  </p>
                )}
                {_.get(section, "has_more_link", null) === true &&
                  _.get(section, "more_link_text", null) && (
                    <div className="text-link">
                      {_.get(section, "more_link_text", null)}
                    </div>
                  )}
              </div>
            </Link>
          )
        )}
      </section>
    );
  }
}
