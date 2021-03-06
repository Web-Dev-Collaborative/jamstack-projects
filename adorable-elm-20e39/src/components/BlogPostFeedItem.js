import React from "react";
import _ from "lodash";
import moment from "moment-strftime";

import { Link, withPrefix } from "../utils";
import BlogPostCategories from "./BlogPostCategories";

export default class BlogPostFeedItem extends React.Component {
  render() {
    let blog_feed_section = _.get(this.props, "blog_feed_section", null);
    let post = _.get(this.props, "post_page", null);
    return (
      <article className="cell">
        <div className="card">
          {_.get(post, "image", null) && (
            <Link
              className="card__media card__media--top"
              href={withPrefix(_.get(post, "stackbit_url_path", null))}
            >
              <img
                src={withPrefix(_.get(post, "image", null))}
                alt={_.get(post, "image_alt", null)}
              />
            </Link>
          )}
          <div className="card__body">
            <header className="card__header">
              {_.get(post, "categories", null) && (
                <BlogPostCategories
                  {...this.props}
                  categories={_.get(post, "categories", null)}
                  container_class={"card__meta"}
                />
              )}
              {_.get(blog_feed_section, "title", null) ? (
                <h3 className="h4 card__title">
                  <Link
                    href={withPrefix(_.get(post, "stackbit_url_path", null))}
                  >
                    {_.get(post, "title", null)}
                  </Link>
                </h3>
              ) : (
                <h2 className="h4 card__title">
                  <Link
                    href={withPrefix(_.get(post, "stackbit_url_path", null))}
                  >
                    {_.get(post, "title", null)}
                  </Link>
                </h2>
              )}
            </header>
            {_.get(post, "excerpt", null) && (
              <div className="card__copy">
                <p>{_.get(post, "excerpt", null)}</p>
              </div>
            )}
            <footer className="card__footer">
              <span>
                On{" "}
                <time
                  dateTime={moment(_.get(post, "date", null)).strftime(
                    "%Y-%m-%d %H:%M"
                  )}
                >
                  {moment(_.get(post, "date", null)).strftime("%B %d, %Y")}
                </time>
              </span>
              {_.get(post, "author", null) &&
                (() => {
                  let author = _.get(post, "author", null);
                  return author.link ? (
                    <span>
                      {" "}
                      by{" "}
                      <Link href={withPrefix(author.link)}>
                        {author.first_name} {author.last_name}
                      </Link>
                    </span>
                  ) : (
                    <span>
                      {" "}
                      by {author.first_name} {author.last_name}
                    </span>
                  );
                })()}
            </footer>
          </div>
        </div>
      </article>
    );
  }
}
