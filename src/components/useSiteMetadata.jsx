import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
