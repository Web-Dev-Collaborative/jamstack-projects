import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import { getPages, Link, withPrefix } from "../utils";
import BlogPostFooter from "../components/BlogPostFooter";

export default class Blog extends React.Component {
  render() {
    let display_posts = _.orderBy(
      getPages(this.props.pages, "/blog"),
      "date",
      "desc"
    );
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <div className="grid post-feed">
              {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} className="cell post">
                  <div className="card">
                    {_.get(post, "thumb_image", null) && (
                      <Link
                        className="post-thumbnail"
                        href={withPrefix(
                          _.get(post, "stackbit_url_path", null)
                        )}
                      >
                        <img
                          src={withPrefix(_.get(post, "thumb_image", null))}
                          alt={_.get(post, "thumb_image_alt", null)}
                        />
                      </Link>
                    )}
                    <div className="post-body">
                      <header className="post-header">
                        <h2 className="post-title">
                          <Link
                            href={withPrefix(
                              _.get(post, "stackbit_url_path", null)
                            )}
                          >
                            {_.get(post, "title", null)}
                          </Link>
                        </h2>
                      </header>
                      <div className="post-excerpt">
                        <p>{_.get(post, "excerpt", null)}</p>
                      </div>
                      <BlogPostFooter
                        {...this.props}
                        page={post}
                        date_type={"short"}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
