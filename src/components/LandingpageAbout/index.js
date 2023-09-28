import React from 'react';

export default function LandingpageAbout() {
    return <>
    <div className="container relative mx-auto mt-32" id="about" style={{maxWidth: "1050px"}}>
      <h2 className="section-title">About OpenDataCam</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Introduction</div>
          <div className="section-content-text">
            OpenDataCam is an open source tool that helps to quantify the world. With computer
            vision OpenDataCam understands and quantifies moving objects. The simple setup allows
            everybody to count moving objects from cameras and videos.
          </div>
        </div>
        <div className="section-content-box">
          <img 
            className="section-content-img" 
            src={require('@site/static/img/about-1.jpg').default}
            alt="Camera"
          />
        </div>
      </div>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">What can you use it for?</div>
          <div className="section-content-text">
            <p>
              People use OpenDataCam for many different <a href="use-cases">use cases</a>. It is 
              especially popular for traffic studies (modal-split, turn-count, etc.) but OpenDataCam
              detects 50+ common objects out of the box and can be used for many more things.
            </p>
            <p>
              And in case it does not detect what you are looking for, you can always train your own
              model.
            </p>
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-3.jpg').default} alt="RJ45 Cables" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">How does it work?</div>
          <div className="section-content-text">
            <p>
              OpenDataCam uses machine learning to detect objects in videos and camera feeds.
              It then follows the objects as they move accross the scene.
            </p>
            <p>
              Users easily define counters via their browser, and every time an object crosses the
              counter, OpenDataCam takes count.
            </p>
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-2.jpg').default} alt="YOLO neural network" />
        </div>
      </div>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">How do I get started?</div>
          <div className="section-content-text">
            <p>
              The simplest way to get started with OpenDataCam is downloading our <a href="https://hub.docker.com/r/opendatacam/opendatacam">Docker images</a> and run it your computer, server or Jetson device.
              As long as it has a NVIDIA GPU, it can run OpenDataCam.
            </p>
            <p>
              More information on how to run OpenDataCam on your device or machine can be found in our <a href="https://github.com/opendatacam/opendatacam">GitHub repository</a>.
              </p>
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-4.jpg').default} alt="RJ45 Cables" />
        </div>
      </div>
    </div>
    </>
}