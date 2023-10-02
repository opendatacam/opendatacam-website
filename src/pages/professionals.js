import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import LandingpageCallToAction from '../components/LandingPageCallToAction';

export default function Features() {
    const { siteConfig } = useDocusaurusContext();
    return <Layout
        title="For Professionals"
        description={siteConfig.tagline}>
        <main>
            <div className="container relative mx-auto md:mt-32" id="features" style={{ maxWidth: "1050px" }}>
                <h2 className="section-title">OpenDataCam For Professionals</h2>
                <div className="section-content">
                    <div className='section-content-text px-4'>
                        <p>
                            While OpenDataCam is free for everyone to use, we do offer improvements
                            and services around OpenDataCam, specifically tailored for professionals
                            and businesses
                        </p>
                    </div>
                
                    <div class="col col--6">
                        <div class="card">
                            <div class="card__header">
                                <h3>For Domain Experts</h3>
                            </div>
                            <div class="card__body">
                                <p>
                                    Traffic Engineers, City Planners, Retail Store Managers and
                                    other domain experts
                                </p>
                                <p>
                                    Get started with OpenDataCam quicker with "OpenDataCam as a
                                    Service". Use OpenDataCam as a cloud service and upload your
                                    pre-recorded video or buy/rent cameras with OpenDataCam
                                    pre-installed.
                                </p>
                            </div>
                            <div class="card__footer">
                                <a href="mailto:info@opendata.cam?subject=OpenDataCam for Domain Experts"
                                   className='hover:no-underline'>
                                    <button class="button button--secondary button--block">Get in touch!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col col--6">
                        <div class="card">
                            <div class="card__header">
                                <h3>For Developers</h3>
                            </div>
                            <div class="card__body">
                                <p>
                                    Software Developers, Electrical Engineers, Product Managers,
                                    AI Experts and others
                                </p>
                                <p>
                                    Kickstart your product development by using OpenDataCam as your
                                    base. Get all the features of OpenDataCam out the box and focus
                                    on adding your unique value add for better products and faster
                                    time to markets. To be even faster, hire the experienced
                                    OpenDataCam team to support your in-house engineering.
                                </p>
                            </div>
                            <div class="card__footer">
                                <a href="mailto:info@opendata.cam?subject=OpenDataCam for Developers"
                                   className='hover:no-underline'>
                                    <button class="button button--secondary button--block">Get in touch!</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LandingpageCallToAction />
        </main>
    </Layout>;
};
