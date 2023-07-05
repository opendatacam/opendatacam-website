import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function LandingpageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className="landing-container">
      <div className="flex items-center justify-center flex-1 hero">
        <div className={`text-center max-w-lg pl-8 pr-8 mb-16`}>
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium relative z-10`}>
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
          className="w-2/6 blue-sun sm:w-auto" 
          src={require('@site/static/background-icons/sun_1.gif').default}
        />
        <img
          className="w-2/6 red-string sm:w-2/6 md:w-auto"
          src={require('@site/static/background-icons/redwhirl.gif').default}
        />
        <img 
          className="w-2/6 road-yellow sm:w-auto" 
          src={require('@site/static/background-icons/street_1.gif').default}
        />
      </div>

      <style jsx="true">{`
        .card-bordertop {
          border-width: 1px;
        }
        .blue-border{
          border-color: #04D6FF;
        }
        .red-border{
          border-color: #ED6B4F;
        }
        .yellow-border{
          border-color: #FFEE68;
        }
        .green-border{
          border-color: #48BB78;
        }
        .mt-6{
          margin-top: 0.5rem !important;
        }
        .text-yellow-400 {
          color: #ffe50f;
        }


        .section-content {
          padding-left: 1rem;
          padding-right: 1rem;
          margin-top: 80px;
        }
        .px-6, .px-8 {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        .-mx-2{
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }
        .card .card-bordertop {
          transition: 0.3s;
        }

        .card:hover .card-bordertop {
          border-color: black;
          transform: translateY(-10px);
        }
        h2 {
          font-size: 5rem !important;
          line-height: 5rem !important;
          margin-top: 150px;
          margin-bottom: 70px;
        }
        @media (max-width: 640px) {
          h2 {
            font-size: 4rem !important;
            line-height: 4rem !important;
            margin-top: 150px;
            margin-bottom: 100px;
          }
        }
        a {
          transition: 0.1s !important;
        }

        .section-content-title,
        .card-title {
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
        .landing-container h1 {
          line-height: 55px;
          font-weight: regular;
          color: #1d1d1d;
        }
        [data-theme='dark'] .landing-container h1 {
          color: unset;
        }

        .rounded-lg {
          border: 0px;
          background-color: #1d1d1d;
        }
        .section-title {
          width: 40rem;
          left: 50%;
          transform: translateX(-50%);
          -webkit-ransform: translateX(-50%);
          -moz-ransform: translateX(-50%);
          -ms-ransform: translateX(-50%);
          -o-ransform: translateX(-50%);
          position: relative;
        }
        .mb-48 {
          margin-bottom: 100px;
        }
        @media (max-width: 640px) {
          .section-title {
            width: 90%;
            font-size: 2.8rem !important;
            line-height: 2.8rem !important;
          }
        }

        .max-w-lg {
          max-width: 40rem;
        }


        .section-content-text,
        .card-text,
        .card-title {
          text-align: left;
          line-height: 24px;
        }
        .text-center {
          line-height: 35px;
        }
        .text-blue-400 {
          color: #05d6ff;
        }

        @media (max-width: 1023px) {
          .landing-container h1 {
            line-height: 2.6rem;
            font-size: 2.5rem;
          }
          .text-center {
            line-height: 30px;
          }
        }
        @media (max-width: 640px) {
          .landing-container h1 {
            line-height: 2.7rem;
            font-size: 2.5rem;
          }
          .text-center {
            line-height: 25px;
          }
        }
        @media (max-width: 800px) {
          .card-bordertop {
            margin-top: 80px !important;
          }

        }

        @media (max-height: 800px) and (orientation: portrait) {
          .landing-container {
            min-height: 80vh;
          }
        }

        .background-icon {
          z-index: -1;
        }

        .blue-sun {
          position: absolute;
          top: 0;
          left: 20%;
          width: 20%;
        }

        .red-string {
          position: absolute;
          top: 20vh;
          right: 1rem;
          width: 21vw;
        }
        .yellowArrow{
          width: 9vw;
        }
        .red-string-bottom {
          margin-bottom: 35px;
          display: none;
        }

        .green-camera {
          position: absolute;
          bottom: 10%;
          right: 5%;
          display: none;
        }

        .road-yellow {
          position: absolute;
          bottom: 10%;
          left: 5%;
          width: 13vw;
        }

        .yellow-string {
          position: absolute;
          top: 250px;
          right: 0;
          width: 300px;
          display: none;
        }

        .blue-arrows {
          position: absolute;
          left: 0;
          top: 0px;
          width: 200px;
          display: none;
        }

        .green-cloud {
          position: absolute;
          right: 0px;
          top: 20px;
          width: 170px;
          display: none;
        }

        .red-string-camera {
          position: absolute;
          left: 0px;
          top: 100px;
        }

        @media (max-width: 800px) {
          .green-camera {
            width: 120px;
          }
          .road-yellow {
            width: 70px;
            bottom: 3%;
          }
          .blue-sun {
            width: 110px;
            left: 80px;
            top: 10vh;
          }
          .red-string {
            width: 100px;
            top: 57vh;
          }
          .yellowArrow{
            width: 80px;
          }
        }

        .people {
          display: flex;
        }
        @media (max-width: 1000px) {
          .people {
            display: block;
          }
        }
        .people img {
          display: inline;
        }
      `}</style>
    </div>
  );
}
