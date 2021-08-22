module.exports = {
  siteMetadata: {
    title: 'Adam Stegman',
    description: 'Remote Staff Software Engineer (B.S. Computer Science) with experience in Ruby (and Rails), HTML/CSS, Typescript/Javascript, Go, several JVM languages, and with devops. I like to work on distributed systems using agile and XP practices.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Stegman`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#0288D1`,
        display: `browser`,
        icon: `src/assets/atom.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        dir: './src/assets',
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of the content container as this plugin uses this
              // as the base for generating different widths of each image.
              maxWidth: 960,
              // Remove the default behavior of adding a link to each image.
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
