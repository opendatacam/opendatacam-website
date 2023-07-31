import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function LandingpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="landing-container">
      <div className="flex items-center justify-center flex-1 hero">
        <div className={`text-center leading-9 lg:leading-8 sm:leading-6 max-w-xl pl-8 pr-8 mb-16`}>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium relative z-10 ${styles.heroHeader}`}>
            An open source tool to quantify the world
          </h1>
          <a
            href="https://github.com/opendatacam/opendatacam"
            target="_blank"
            className={`flex inline-flex items-center justify-center mt-10 ${styles.btn}`}
          >
            Installation guide
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

      <style jsx="true">{`
        .section-content-title {
          font-size: 1.7rem;
          line-height: 1.9rem !important;
        }
        .landing-container {
          position: relative;
          min-height: 90vh;
          max-height: 900px;
          display: flex;
          flex-direction: column;
        }

        .section-content-text {
          text-align: left;
          line-height: 24px;
        }

        @media (max-height: 800px) and (orientation: portrait) {
          .landing-container {
            min-height: 80vh;
          }
        }
      `}</style>
    </div>
  );
}
