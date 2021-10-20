/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const withPrefix = require("./src/utils/withPrefix").default;

exports.onRenderBody = function ({ setHeadComponents, setPostBodyComponents }) {
  setHeadComponents([]);

  setPostBodyComponents([
    <React.Fragment>
      <script src={withPrefix("js/init.js")} />
    </React.Fragment>,
  ]);
};
