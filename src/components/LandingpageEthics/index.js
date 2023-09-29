import React from 'react';

export default function LandingpageEthics() {
    return <>
    <div className="container relative mx-auto mt-32" id="ethics" style={{maxWidth: "1050px"}}>
      <h2 className="section-title">Ethics</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">Privacy</div>
          <div className="section-content-text">
            Privacy is something we tried to bake into the design of the tool. The system only saves
            surveyed meta-data, in particular the path an object moved or number of counted objects
            at a certain point. The novelty of OpenDataCam is, that everything happens on location,
            while no visual data is saved or leaves your device.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/transparency.jpg').default} alt="Transparency" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Transparency</div>
          <div className="section-content-text">
            <p>
              The discussion around the use of cameras and artificial intelligence is ongoing. We
              believe OpenDataCam is a contribution to this discussion, as it offers an
              transparent and privacy respecting alternative. The OpenDataCam communitiy invites
              everyone to contribute to the discussion and development of the technology.
            </p>
            <p>
              Being an open source project, the communitiy and software is hosted on our public <a href="https://github.com/opendatacam/opendatacam" target='_blank'>GitHub repository</a>,
              where it can be reviewed and used by everyone to build privacy preserving camera
              applications.
            </p>
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/privacy.jpg').default} alt="Privacy" />
        </div>
      </div>
    </div>
    </>
}