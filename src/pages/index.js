import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import LandingpageFeatures from '@site/src/components/LandingpageFeatures';
import LandingpageHeader from '@site/src/components/LandingpageHeader';
import LandingpageVideo from '../components/LandingpageVideo';
import LandingpageAbout from '../components/LandingpageAbout';
import LandingpageDemo from '../components/LandingpageDemo';
import LandingpageEthics from '../components/LandingpageEthics';
import LandingpageTestemonials from '../components/LandingpageTestemonials';
import LandingpageTeam from '../components/LandingpageTeam';
import LandingpageCallToAction from '../components/LandingPageCallToAction';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title=""
      description={siteConfig.tagline}>
      <main>
        <LandingpageHeader />
        <LandingpageVideo />
        <LandingpageAbout />
        <LandingpageDemo />
        <LandingpageFeatures />
        <LandingpageEthics />
        <LandingpageTestemonials />
        { /* <LandingpageTeam /> */ }
        <LandingpageCallToAction />
      </main>
    </Layout>
  );
}
