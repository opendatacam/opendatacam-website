import React from 'react';

export default function LandingpageAbout() {
    return <>
    <div className="container relative mx-auto" id="about">
      <h2 className="section-title">About OpenDataCam</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Introduction</div>
          <div className="section-content-text">
            'OpenDataCam' is a tool that helps to quantify the world. It's here for everyone to use! With computer
            vision OpenDataCam understands and quantifies moving objects. The simple setup allows everybody to become
            an urban data miner.
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
          <div className="section-content-title">How can OpenDataCam see?</div>
          <div className="section-content-text">
            OpenDataCam consists of a camera attached to a mini computer. It's running an object detection algorithm
            that counts and tracks moving objects. The board is equipped with a GPU (graphical processing unit), which
            allows it to process many parallel image threads at once. The perfect tool for image analysis and video
            processing.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-2.jpg').default} alt="RJ45 Cables" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Yolo</div>
          <div className="section-content-text">
            On the software side OpenDataCam is running <a href="https://pjreddie.com/darknet/yolo/" target="_blank">YOLO</a> — an object detection library. YOLO is trained to detect
            objects in images. The attached camera feeds YOLO with a video, YOLO then outputs all objects in each frame.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-3.jpg').default} alt="YOLO neural network" />
        </div>
      </div>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">Housing</div>
          <div className="section-content-text">
            OpenDataCam is not tied to a specific housing, instead you can design your own or use an already existing casing. We used the <a href="http://naturebytes.org/our-tech/" target="_blank">Wildlife Cam Casing by Naturbytes</a> to protect the hardware in the wild. Have a look at this <a href="https://github.com/opendatacam/opendatacam/blob/master/documentation/jetson/HOUSING.md">tutorial</a> to see how the set up the the Jetson NANO in the Wildlife Cam Casing.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src={require('@site/static/img/about-4.jpg').default} alt="RJ45 Cables" />
        </div>
      </div>
    </div>
    </>
}