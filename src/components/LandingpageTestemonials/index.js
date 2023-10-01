import React from 'react';

export default function LandingpageTestemonials() {
    return <>
        <div className="container mx-auto mt-32" id="testimonials" style={{ maxWidth: "1050px" }}>
            <h2 className="section-title">OpenDataCam in the Wild</h2>
            <div className="section-content">
                <div className="section-content-text">
                    Here are selected cases are here to show you what you can do with OpenDataCam. Apart from that we also think OpenDataCam would be great
                    to use in spaces like shops, train, stations, drones...
                </div>
                <div className="section-content-text">
                    If you are using OpenDataCam, let us know and get added to the list!
                </div>
            </div>
            <div className="section-content -mt-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 md:pr-4">
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
                    <div className="w-full md:w-1/2 md:pl-4">
                        <div className="card">
                            <div className="card__image">
                                <img
                                    src={require('@site/static/img/testimonial-privacy-paper.jpeg').default}
                                    alt="Image alt text"
                                    title="Logo Title Text 1" />
                            </div>
                            <div className="card__header">
                                <h3>Privacy-centred data-driven innovation in the smart city. Exemplary use case of traffic counting</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    This paper, shows the use case of traffic counting as an example to
                                    illustrate how the use of advanced technologies and integrated
                                    planning strategies can shift the balance between administrative and
                                    business interests on the one hand, and privacy concerns on the
                                    other, towards a privacy-centric approach. They demonstrate a
                                    privacy-centric participatory development process that led to a
                                    prototypical technical solution using OpenDataCam for
                                    privacy-friendly and human-centric traffic counting.
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href="https://www.tandfonline.com/doi/full/10.1080/21650020.2021.1950044" target="_blank" className="button button--secondary button--block">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:pr-4">
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
                    <div className="w-full md:w-1/2 md:pl-4">
                        <div className="card">
                            <div className="card__image">
                                <img
                                    src={require('@site/static/img/testimontia-demonstrator-mittelstand.png').default}
                                    alt="Image alt text"
                                    title="Logo Title Text 1" />
                            </div>
                            <div className="card__header">
                                <h3>Umsetzungsprojekt mit Stadt Hennef: Verkehrserfassung</h3>
                            </div>
                            <div className="card__body">
                                <p>
                                    In der praktischen Anwendung können so zum Beispiel
                                    vorbeilaufende Personen (bspw. im Einzelhandel) erfasst oder
                                    Fahrzeuge (bspw. zur Steuerung logistischer Prozesse) in einem
                                    bestimmten Bereich gezählt werden. Diese Daten könnten dann
                                    wiederum genutzt werden, um Prozesse anzustoßen, wie etwa die 
                                    Anpassung von Reinigungsintervallen an tatsächliche
                                    Besucherzahlen oder der Versand automatischer Benachrichtigungen
                                    bei Ankunft oder Abfahrt eines Lieferfahrzeuges.
                                </p>
                            </div>
                            <div className="card__footer">
                                <a href="https://demonstratoren.gfe-net.de/demonstratoren/opendatacam-objekterkennung-zaehlung-und-workflow" target="_blank" className="button button--secondary button--block">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}