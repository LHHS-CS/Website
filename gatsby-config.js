module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-126196926-1",
        head: false,
        anonymize: false,
      }
    }
  ]
};
