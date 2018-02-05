import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import ProjectFooter from '../components/ProjectFooter';

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    {children()}
    <ProjectFooter allMarkdownRemark={data.allMarkdownRemark} />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query ProjectLayoutQuery {
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
        keywords
      }
    }
  }
`
