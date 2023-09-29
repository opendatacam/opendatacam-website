import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import LandingpageTestemonials from '../components/LandingpageTestemonials';
import LandingpageCallToAction from '../components/LandingPageCallToAction';

export default function UseCases() {
    const { siteConfig } = useDocusaurusContext();
    return <Layout
        title="Use Cases"
        description={siteConfig.tagline}>
        <main>
            <div className="container relative mx-auto md:mt-32" id="use-cases" style={{ maxWidth: "1050px" }}>
                <h2 className="section-title">Use Cases</h2>
                <div className="section-content">
                    <div className='section-content-text px-4'>
                        <p>
                            As a versatile, unobstrusive, easy to install and privacy preserving
                            tool, OpenDataCam can be used in many different szenarios, where
                            traditional counting methods don't work well.
                        </p>
                        <p>
                            Here are some examples to show some of the most common use cases that
                            people use OpenDataCam for, and a  few other use cases that may give you
                            some inspiration on what else you can do wit OpenDataCam
                        </p>
                    </div>
                </div>
                
                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Public Squares</div>
                        <div className="section-content-text">
                            <p>
                                Many cities are looking at their public squares, pedestrian zones
                                and parks to make them more green and inviting and in return improve
                                the quality of living and economic value of the area.
                            </p>
                            <p>
                                OpenDataCam gives you insights into how many people visit the
                                square, where and how long they stay and capture their paths
                                so you can base the redesign on actual usage data and measure their
                                positive effects after the redesign.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/use-case-public-square.jpg').default} alt="Image of different object types such as cars, trams and donuts" />
                        <div className='text-xs'>Photo Credit: <a href="https://commons.wikimedia.org/wiki/File:M%C3%BCnchen,_St._Peter,_Blick_zum_Marienplatz.jpg" target='_blank'>Dguendel</a></div> 
                    </div>
                </div>

                <div className="section-content section-content--reverse">
                    <div className="section-content-box">
                        <div className="section-content-title">Bike Infrastucture & Micromobility</div>
                        <div className="section-content-text">
                            <p>
                                Wholistic approaches to urban mobility include bike and
                                micromobility since for many cities going by bike, scooter, etc. is
                                not only more environmentally friendly than cars, it's often also
                                faster. As cities are building the necessary cycling infrastucture,
                                they are often lacking the necessary data to determine where to best 
                                build new infrastucture.
                            </p>
                            <p>
                                OpenDataCam can measure multi-modal traffic volumes, before and
                                after construction, and fill this gap, ensuring the right decisions
                                have been made.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/use-case-bike-lane.jpg').default} alt="OpenDataCam UI with counter line visible." />
                    </div>
                </div>

                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Intersections</div>
                        <div className="section-content-text">
                            <p>
                                Improving intersections requires data on traffic volumes, turn
                                counts etc. to ensure optimal design and traffic light controls.
                                However, often the data used for planning is based on short
                                measurements of a few hours, multiplied by some heuristic factors,
                                leaving much room for error.
                            </p>
                            <p>
                                OpenDataCam, allows to measure the necessary data in real-time for
                                days or weeks, taking out the heuristic inaccuracies and leaving
                                you with 100% accurate data for your planning.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/trajectories.jpg').default} alt="Trajectories of cars on a busy street" />
                    </div>
                </div>

                <div className="section-content section-content--reverse">
                    <div className="section-content-box">
                        <div className="section-content-title">and so much more</div>
                        <div className="section-content-text">
                            <p>
                                As open source software, OpenDataCam can be customized by anyone for
                                anything.
                            </p>
                            <p>
                                For example, you can teach OpenDataCam to detect litter such as 
                                cigarette butts, attach it to a bicycle and create a "litter map" of
                                your city!
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/use-case-litter.jpg').default} alt="Litter detected from a bicycle" />
                    </div>
                </div>

            </div>

            <LandingpageTestemonials />
            <LandingpageCallToAction />
        </main>
    </Layout>;
};
