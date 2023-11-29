import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function LandingpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={ styles.landingContainer }>
      <div className="flex items-center justify-center flex-1 hero">
        <div className={`text-center leading-9 lg:leading-8 sm:leading-6 max-w-xl pl-8 pr-8 mb-16`}>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium relative z-10 ${styles.heroHeader}`}>
            An open source tool to quantify the world
          </h1>
          <a
            href="/docs/#quickstart"
            className={`flex inline-flex items-center justify-center mt-10 ${styles.btn}`}
          >
            Quickstart Guide
          </a>
        </div>
        <img 
          className={`w-2/6 ${styles.blueSun} sm:w-auto`}
          src={require('@site/static/background-icons/sun_1.gif').default}
        />
        <img
          className={`w-2/6 ${styles.redString} sm:w-2/6 md:w-auto`}
          src={require('@site/static/background-icons/redwhirl.gif').default}
        />
        <img 
          className={`w-2/6 ${styles.roadYellow} sm:w-auto` }
          src={require('@site/static/background-icons/street_1.gif').default}
        />
      </div>
    </div>
  );
}
