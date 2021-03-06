import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <div>
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        Hello my name is Alexis Ortiz Ojeda and I am a full-stack developer
        residing in San Jose, CA. I attended the University of California Santa
        Cruz and received a degree in Computer Networking and Digital Media. I
        am 22 and married to a wonderful woman. When I am not programming, I am
        making rap beats.
      </p>
      <p>
        Want to work with me? <Link to="/contact">Reach out.</Link>
      </p>
    </Layout>
  </div>
);

export default AboutPage;
