import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import LandingpageCallToAction from '../components/LandingPageCallToAction';

export default function Features() {
    const { siteConfig } = useDocusaurusContext();
    return <Layout
        title="Features"
        description={siteConfig.tagline}>
        <main>
            <div className="container relative mx-auto md:mt-32" id="features" style={{ maxWidth: "1050px" }}>
                <h2 className="section-title">Features</h2>
                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Cars, Bikes, Pedestrians, and more</div>
                        <div className="section-content-text">
                            OpenDataCam can detect Cars, Trucks, Busses, Bikes, Motorcycles,
                            Pedestrians and many more common objects out of the box! In many cases,
                            allowing you to get started without the need to train your own model.
                            But if you like to customize the model, you can do that too!
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/about-1.jpg').default} alt="Image of different object types such as cars, trams and donuts" />
                    </div>
                </div>

                <div className="section-content section-content--reverse">
                    <div className="section-content-box">
                        <div className="section-content-title">Fine grained Counters</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam lets you set multiple counters, to give you fine grained
                                insights into what's happening. Each counter give you the time, type and
                                direction when it gets triggered. When an object crosses multiple
                                counters (e.g. when a car takes a turn at an intersection), OpenDataCam
                                lets you track that too!
                            </p>
                            <p>
                                All of those can be configured from an easy to use User Interface.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/own-the-data.jpg').default} alt="OpenDataCam UI with counter line visible." />
                    </div>
                </div>

                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Trajectory Analysis</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam lets you also understand how objects move by looking at
                                their trajectories.
                            </p>
                            <p>
                                This allows you for example to study how Pedestrians cross a public
                                square or how cars are crossing lanes.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/trajectories.jpg').default} alt="Trajectories of cars on a busy street" />
                    </div>
                </div>

                <div className="section-content section-content--reverse">
                    <div className="section-content-box">
                        <div className="section-content-title">Real-time or pre-recorded</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam supports running from various video sources such as 
                                USB-Cameras, IP-Cameras, RTSP-Streams, YouTube Live-Streams etc.
                            </p>
                            <p>
                                If you already have pre-recorded video captures, you can import
                                those into OpenDataCam, and analyze the video this way.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/about-2.jpg').default} alt="OpenDataCam with USB Camera plugged in" />
                    </div>
                </div>

                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Edge Devices and Data Centers</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam runs on a large variety of platforms, from small edge
                                devices like <a href='https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/' target='_blank'>
                                NVIDIA Jetson Nano</a> to large data centers. All you need is a GPU
                                and CUDA.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/about-4.jpg').default} alt="Running OpenDataCam on an Edge Device" />
                    </div>
                </div>

                <div className="section-content section-content--reverse">
                    <div className="section-content-box">
                        <div className="section-content-title">You own the data</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam by default runs in stand alone mode, so you stay in full
                                control of the edata you collect.
                            </p>
                            <p>
                                No data leaves the device. Everything is stored on a database
                                running inside OpenDataCam and can be downloaded by you at any time,
                                via the Web Interface or API.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/transparency.jpg').default} alt="Privacy" />
                    </div>
                </div>

                <div className="section-content section-content">
                    <div className="section-content-box">
                        <div className="section-content-title">Easy to use API</div>
                        <div className="section-content-text">
                            <p>
                                OpenDataCam offers an easy to use REST API, allowing you to fully
                                manage the camera and data collected by OpenDataCam.
                            </p>
                            <p>
                                Take a look at our <a href='https://opendatacam.github.io/opendatacam/apidoc/' target='_blank'>API</a>.
                            </p>
                        </div>
                    </div>
                    <div className="section-content-box">
                        <img className="section-content-img" src={require('@site/static/img/privacy.jpg').default} alt="OpenDataCam Hardware and API" />
                    </div>
                </div>
            </div>

            <LandingpageCallToAction />
        </main>
    </Layout>;
};
