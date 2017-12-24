/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

const createLegacyRedirects = ({ createRedirect }) => {
  createRedirect({
    fromPath: '/projects.html',
    isPermanent: true,
    redirectInBrowser: true,
    toPath: '/projects',
  });
};

const createProjectPages = ({ graphql, createPage, createRedirect }) => {
  const projectTemplate = path.resolve('src/templates/project.js');
  return graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { kind: { eq: "project" } } }) {
        edges {
          node {
            fields {
              project {
                slug
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        layout: "project",
        path: node.fields.project.slug,
        component: projectTemplate,
        context: { slug: node.fields.project.slug },
      });
      createRedirect({
        fromPath: `${node.fields.project.slug}.html`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.fields.project.slug,
      });
    });
  });
};

const setProjectFields = ({ node, getNode, createNodeField }) => {
  // trim trailing slash from slug
  const slug = createFilePath({ node, getNode, basePath: 'projects' }).slice(0, -1);
  const project = {
    slug: `/projects${slug}`,
    title: node.frontmatter.title,
    subtitle: node.frontmatter.subtitle,
    status: node.frontmatter.status,
    createdAt: node.frontmatter.created_at,
    endedAt: node.frontmatter.ended_at,
    datesWorkedOn: node.frontmatter.dates_worked_on,
    deployedUrl: node.frontmatter.deployed_url,
    sourceUrl: node.frontmatter.source_url,
  };
  createNodeField({ node, name: 'project', value: project });
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark' && node.frontmatter.kind === 'project') {
    setProjectFields({ node, getNode, createNodeField });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;
  createLegacyRedirects({ createRedirect });
  return createProjectPages({ graphql, createPage, createRedirect });
};
