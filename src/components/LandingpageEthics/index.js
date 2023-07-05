import React from 'react';

export default function LandingpageEthics() {
    return <>
    <div className="container relative mx-auto md:mt-32" id="ethics" style={{maxWidth: "1050px"}}>
      <img className="hidden green-cloud background-icon md:block" src="static/background-icons/cloud.gif" />
      <h2 className="section-title">Ethics</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">Transparency</div>
          <div className="section-content-text">
            The discussion around the use of artificial intelligence in public space is ongoing. We believe OpenDataCam
            is a contribution to this discussion, as it offers an offline, transparent, thus privacy respecting
            alternative. Paramount to the open source access is the responsible use of this technology we request from
            every user.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/transparency.jpg').default} alt="Transparency" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Privacy</div>
          <div className="section-content-text">
            As OpenDataCam is an experimental prototype with public facing applications, privacy is something we tried
            to bake into the design of the tool. After getting in touch with <a href="https://medium.com/sensor-lab/the-privacy-illusion-994ed98ec3ab" target="_blank">Sensor Labs privacy label</a>, we’re currently
            finding ways to apply the label to OpenDataCam.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/privacy.jpg').default} alt="Privacy" />
        </div>
      </div>
    </div>
    </>
}