import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import ProjectFooter from '../ProjectFooter';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(filter: { frontmatter: { kind: { eq: "project" } } }, sort: { fields: [frontmatter___ended_at], order: DESC }) {
          edges {
            node {
              fields {
                project {
                  slug
                  title
                  subtitle
                  status
                  createdAtTimestamp: createdAt
                  createdAt(formatString: "MMMM YYYY")
                  endedAtTimestamp: endedAt
                  endedAt(formatString: "MMMM YYYY")
                  deployedUrl
                  sourceUrl
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        {children}
        <ProjectFooter allMarkdownRemark={data.allMarkdownRemark} />
      </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
