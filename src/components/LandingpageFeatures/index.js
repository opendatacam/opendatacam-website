import React from 'react';

export default function LandingpageFeatures() {
  return (
    <div className="container relative mx-auto md:mt-32" id="features" style={{maxWidth: "1050px"}}>
      <h2 className="section-title">Features</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Highlights</div>
          <div className="section-content-text">
            <p>OpenDataCam comes <a href='/features'>feature packed</a>, the highlight are</p>
            <ul>
              <li>Multiple object classes</li>
              <li>Fine grained counter logic</li>
              <li>Trajectory analysis</li>
              <li>Real-time or pre-recorded video sources</li>
              <li>Run on small devices in the field or data centers in the cloud</li>
              <li>You own the data</li>
              <li>Easy to use API</li>
            </ul>
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/own-the-data.jpg').default} alt="Camera" />
        </div>
      </div>
    </div>
  );
}
