import React from 'react';

export default function LandingpageFeatures() {
  return (
    <div className="container relative mx-auto md:mt-32" id="features">
      <img className="hidden blue-arrows background-icon md:block" src="static/background-icons/camera_1.gif" />
      <h2 className="section-title">Features</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">You own the data!</div>
          <div className="section-content-text">
            OpenDataCam is not connected to the cloud, you’re in full control of when to gather it. Via the interface
            you can specify which areas of the picture objects should be counted. Also the camera tracks how things move
            through the frames. Via an easy export function you can access the tally and traces and use it in any
            thinkable way. Going all-in? Use the <a href="https://github.com/opendatacam/opendatacam/tree/master/apidoc" target="_blank">API</a> to get access to the raw data points.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/own-the-data.jpg').default} alt="Camera" />
        </div>
      </div>
    </div>
  );
}
