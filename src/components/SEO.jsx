// SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Logo from '../images/logo.png'

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Divine Infotech" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://divineinfotech.org" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={Logo} />
      <link rel="canonical" href="https://divineinfotech.org" />
    </Helmet>
  );
};

export default SEO;
