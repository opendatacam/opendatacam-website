import React from 'react';

export default function LandingpageTestemonials() {
    return <>
        <div className="container mx-auto md:mt-32" id="testimonials" style={{maxWidth: "1050px"}}>
            <h2 className="section-title">OpenDataCam in the Wild</h2>
            <div className="section-content">
                <div className="section-content-text">
                    After publishing the alpha version, we asked people what they did with it. These selected cases are here to
                    show you what you can do with OpenDataCam.
                </div>
                <div className="section-content-text">
                    Let us know about how you use OpenDataCam. Apart from that we also think OpenDataCam would be great
                    to…Profiling in spaces like shops, train, stations, drones...
                </div>
            </div>
            <div className="px-2 mt-12">
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full px-8 md:w-1/2">
                        <div className="card">
                            <div className="card__image">
                                <img
                                    src="https://citylab-berlin.org/wp-content/uploads/2021/07/trafficcount_tile-768x576.jpg"
                                    alt="Image alt text"
                                    title="Logo Title Text 1" />
                            </div>
                            <div className="card__header">
                                <h3>Research Project with HTW & Technologiestiftung</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    In coordination with the Berlin traffic administration and advising planners, we'd like to explore how
                                    the OpenDataCam performs in real-world settings. We'll take a closer look on accuracy and test
                                    scenarios and data evaluation.
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href="https://citylab-berlin.org/de/projects/trafficcount/" target="_blank" className="button button--secondary button--block">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-8 md:w-1/2">
                    <div className="card">
                        <div className="card__image">
                            <img
                                src={require('@site/static/img/testimontia-dashboard-nrw.png').default}
                                alt="Image alt text"
                                title="Logo Title Text 1" />
                            </div>
                            <div className="card__header">
                                <h3>Logistics NRW Dashboard</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    The “Crowd Solving” project has implemented a Logistics Dashboard including various webcam locations
                                    where OpenDataCam is supposed to be implemented to create traffic data around the Neuss Harbour area.
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href="https://logisticsdashboard.traffgoroad.com" target="_blank" className="button button--secondary button--block">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}