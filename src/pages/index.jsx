import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';

export default function IndexPage({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Hero title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <About about={data.site.siteMetadata.about} />
      <Services />
      <Contact />
    </>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        about: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        about
        title
        description
      }
    }
  }
`;
