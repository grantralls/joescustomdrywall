module.exports = {
  siteMetadata: {
    title: "Joe's Custom Drywall",
    description: 'A quick header blurb',
    author: 'Grant Ralls',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien tellus, pulvinar ut interdum non, iaculis non erat. Curabitur ac auctor ipsum, eleifend semper eros. Vestibulum id mauris enim. Donec non dui vestibulum, tempor ante vitae, ultricies augue. Praesent commodo fringilla pellentesque. Sed consequat augue a magna accumsan gravida. Donec leo sem, fermentum quis nibh in, vestibulum iaculis dui. Quisque ipsum lacus, sodales id suscipit et, luctus eget nisi. Pellentesque non sodales sapien. In ut justo ac sapien tincidunt porta ac nec ligula. Phasellus non leo tellus. Cras congue euismod elit, dapibus finibus eros varius in. Donec non consequat orci.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
