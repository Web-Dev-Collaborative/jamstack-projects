import React from "react";
import _ from "lodash";

import {
  getPage,
  classNames,
  Link,
  withPrefix,
  pathJoin,
  getPages,
} from "../utils";
import DocsSubmenu from "./DocsSubmenu";

export default class DocsMenu extends React.Component {
  render() {
    let site = _.get(this.props, "site", null);
    let page = _.get(this.props, "page", null);
    let root_docs_path = _.get(site, "data.doc_sections.root_docs_path", null);
    let root_page = getPage(this.props.pages, root_docs_path);
    return (
      <nav id="docs-nav" className="docs-nav">
        <div id="docs-nav-inside" className="docs-nav-inside sticky">
          <button id="docs-nav-toggle" className="docs-nav-toggle">
            Navigate Docs
            <span className="icon-angle-right" aria-hidden="true" />
          </button>
          <div className="docs-nav-menu">
            <ul id="docs-menu" className="docs-menu">
              <li
                className={classNames("docs-menu-item", {
                  current:
                    _.get(page, "stackbit_url_path", null) ===
                    _.get(root_page, "stackbit_url_path", null),
                })}
              >
                <Link
                  href={withPrefix(_.get(root_page, "stackbit_url_path", null))}
                >
                  {_.get(root_page, "title", null)}
                </Link>
              </li>
              {_.map(
                _.get(site, "data.doc_sections.sections", null),
                (section, section_idx) => {
                  let section_path = pathJoin(root_docs_path, section);
                  let section_page = getPage(this.props.pages, section_path);
                  let child_pages = _.orderBy(
                    getPages(this.props.pages, section_path),
                    "weight"
                  );
                  let child_count = _.size(child_pages);
                  let has_children = child_count > 0 ? true : false;
                  let is_current_page =
                    _.get(page, "stackbit_url_path", null) ===
                    _.get(section_page, "stackbit_url_path", null)
                      ? true
                      : false;
                  let is_active = _.get(
                    page,
                    "stackbit_url_path",
                    null
                  ).startsWith(_.get(section_page, "stackbit_url_path", null));
                  return (
                    <React.Fragment key={section_idx + ".1"}>
                      <li
                        key={section_idx}
                        className={classNames("docs-menu-item", {
                          "has-children": has_children,
                          current: is_current_page,
                          active: is_active,
                        })}
                      >
                        <Link
                          href={withPrefix(
                            _.get(section_page, "stackbit_url_path", null)
                          )}
                        >
                          {_.get(section_page, "title", null)}
                        </Link>
                        {has_children && (
                          <React.Fragment>
                            <button className="docs-submenu-toggle">
                              <span className="screen-reader-text">
                                Submenu
                              </span>
                              <span
                                className="icon-angle-right"
                                aria-hidden="true"
                              />
                            </button>
                            <DocsSubmenu
                              {...this.props}
                              child_pages={child_pages}
                              page={page}
                              site={site}
                            />
                          </React.Fragment>
                        )}
                      </li>
                    </React.Fragment>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
