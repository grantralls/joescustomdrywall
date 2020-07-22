/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';

// eslint-disable-next-line react/prop-types
export default function IndexPage({ data }) {
  return (
    <>
      <SEO title="Home" />
      <Hero title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <About about={data.site.siteMetadata.about} />
      <Services />
    </>
  );
}

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
