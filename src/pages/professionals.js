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
                                    Service"
                                </p>
                                <p>
                                    <ul>
                                        <li>
                                            connect existing traffic cameras to the OpenDataCam Cloud
                                        </li>
                                        <li>
                                            upload and analyze existing video footage quicker by
                                            using OpenDataCam Cloud
                                        </li>
                                        <li>
                                            buy or rent hardware with OpenDataCam pre-installed
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="card__footer">
                                <a href="https://nextcloud.vsaw.net/apps/forms/s/nropaHRZCEztFjWm2cs7PMqz"
                                   className='hover:no-underline plausible-event-name=Button+Click:+Domain+Experts'>
                                    <button class="button button--secondary button--block">Sign Up</button>
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
                                <a href="https://nextcloud.vsaw.net/apps/forms/s/qMPBAMrENMiDNX9sNTgm9YkP"
                                   className='hover:no-underline plausible-event-name=Button+Click:+Developers'>
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
