import React from "react";
import _ from "lodash";

import { htmlToReact, Link, withPrefix } from "../utils";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container">
        {_.get(this.props, "data.config.footer.content", null) && (
          <div className="copyright">
            {htmlToReact(_.get(this.props, "data.config.footer.content", null))}
          </div>
        )}
        {_.get(this.props, "data.config.footer.links", null) && (
          <nav>
            {_.map(
              _.get(this.props, "data.config.footer.links", null),
              (link, link_idx) => (
                <Link
                  key={link_idx}
                  href={withPrefix(_.get(link, "url", null))}
                  {...(_.get(link, "new_window", null)
                    ? { target: "_blank" }
                    : null)}
                  {...(_.get(link, "new_window", null) ||
                  _.get(link, "no_follow", null)
                    ? {
                        rel:
                          (_.get(link, "new_window", null) ? "noopener " : "") +
                          (_.get(link, "no_follow", null) ? "nofollow" : ""),
                      }
                    : null)}
                  className="subtle-link"
                >
                  {_.get(link, "label", null)}
                </Link>
              )
            )}
          </nav>
        )}
        {_.get(this.props, "data.config.footer.has_social", null) && (
          <div className="social-links">
            {_.map(
              _.get(this.props, "data.config.footer.social_links", null),
              (link, link_idx) =>
                link && (
                  <Link
                    key={link_idx}
                    href={withPrefix(_.get(link, "url", null))}
                    {...(_.get(link, "new_window", null)
                      ? { target: "_blank" }
                      : null)}
                    {...(_.get(link, "new_window", null) ||
                    _.get(link, "no_follow", null)
                      ? {
                          rel:
                            (_.get(link, "new_window", null)
                              ? "noopener "
                              : "") +
                            (_.get(link, "no_follow", null) ? "nofollow" : ""),
                        }
                      : null)}
                    className="subtle-link"
                  >
                    {_.get(link, "label", null)}
                  </Link>
                )
            )}
          </div>
        )}
      </footer>
    );
  }
}
