import Nav from '../components/Navbar'
import '../styles/index.css'
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <div className="landing-container">
      <Nav />
      <div className='hero flex justify-center items-center flex-1'>
        <div className={`
          text-center
          max-w-lg
          pl-8
          pr-8
          mb-16`
        }>
          <h1 className={
           `text-2xl 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl 
            font-medium
            relative
            z-10`
          }>
            An Open Source Camera to Collect Your Spatial Data
          </h1>
          <a 
            href="https://github.com/opendatacam/opendatacam" 
            className="btn btn-black inline-flex mt-10 flex items-center justify-center"
          >
            Installation guide
          </a>
        </div>
        <img className="blue-sun background-icon w-2/6 sm:w-auto" src="static/background-icons/blue-sun.svg" />
        <img className="red-string background-icon w-2/6 sm:w-2/6 md:w-auto" src="static/background-icons/red-string.svg" />
        <img className="green-camera background-icon w-2/6 sm:w-auto" src="static/background-icons/green-camera.svg" />
        <img className="road-yellow background-icon w-2/6 sm:w-auto" src="static/background-icons/road-yellow.svg" />
      </div>
    </div>
    <div className="video-responsive">
      <iframe src="https://player.vimeo.com/video/260744286" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
    </div>
    <div className="about-section container mx-auto">
      <h2 className="section-title">About</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">
            Introduction
          </div>
          <div className="section-content-text">
            'Open Data Cam' is a tool that helps to quantify the world. It’s here for everyone to use! With computer vision OpenDataCam understands and quantifies moving objects. The simple setup allows everybody to become an urban data miner.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-1.jpg" alt="Camera" />
        </div>
      </div>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">
            How can OpenDataCam see?
          </div>
          <div className="section-content-text">
            OpenDataCam consists of a camera attached to a mini computer. It’s running an object detection algorithm that counts and tracks moving objects. The board is equipped with a GPU (graphical processing unit), which allows it to process many parallel image threads at once. The perfect tool for image analysis and video processing.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-2.jpg" alt="RJ45 Cables" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">
            Yolo
          </div>
          <div className="section-content-text">
            On the software side OpenDataCam is running YOLO — an object detection library. YOLO is trained to detect objects in images. The attached camera feeds YOLO with a video, YOLO then outputs all objects in each frame.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-3.jpg" alt="YOLO neural network" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .landing-container {
        position: relative;
        min-height: 90vh;
        max-height: 900px;
        display: flex;
        flex-direction: column;
      }

      @media (max-height: 800px) and (orientation: portrait) {
        .landing-container {
          min-height: 80vh;
        }
      }

      .background-icon {
        z-index: -1;
      }

      .blue-sun {
        position: absolute;
        top: 0;
        left: 10%;
      }

      .red-string {
        position: absolute;
        top: 1rem;
        right: 1rem;
      }

      .green-camera {
        position: absolute;
        bottom: 10%;
        right: 5%;
      }

      .road-yellow {
        position: absolute;
        bottom: 15%;
        left: 5%;
      }

      .video-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;
        height:0;
      }
      .video-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
      }
    `}</style>
  </Layout>
)
