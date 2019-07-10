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
    <div className="container mx-auto" id="about">
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
    <div className="container mx-auto" id="appdemo">
      <h2 className="section-title">App demo</h2>
      <div className="rounded-lg border border-solid border-gray-400 p-4 sm:p-8 sm:pl-12 sm:pr-12 m-4">
        <div className="video-responsive">
          <iframe src="https://player.vimeo.com/video/346340651" width="640" height="332" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    <div className="container mx-auto" id="features">
      <h2 className="section-title">Features</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">
            You own the data!
          </div>
          <div className="section-content-text">
            OpenDataCam is not connected to the cloud, you’re in full control of when to gather it. Via the interface you can specify which areas of the picture objects should be counted. Also the camera tracks how things move through the frames. Via an easy export function you can access the tally and traces and use it in any thinkable way. Going all-in? Use the API to get access to the raw data points.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-1.jpg" alt="Camera" />
        </div>
      </div>
    </div>
    <div className="container mx-auto" id="ethics">
      <h2 className="section-title">Ethics</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">
            Transparency
          </div>
          <div className="section-content-text">
            The discussion around the use of artificial intelligence in public space is ongoing. We believe OpenDataCam is a contribution to this discussion, as it offers an offline, transparent, thus privacy respecting alternative. Paramount to the open source access is the responsible use of this technology we request from every user.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-1.jpg" alt="Camera" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">
            Privacy
          </div>
          <div className="section-content-text">
            As OpenDataCam is an experimental prototype with public facing applications, privacy is something we tried to bake into the design of the tool. After getting in touch with Sensor Labs privacy label, we’re currently finding ways to apply the label to OpenDataCam.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-1.jpg" alt="Camera" />
        </div>
      </div>
    </div>
    <div className="container mx-auto" id="features">
      <h2 className="section-title">OpenDataCam in the Wild</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-text">
            After publishing the alpha version, we asked people what they did with it. These selected cases are here to show you what you can do with OpenDataCam.
          </div>
        </div>
        <div className="section-content-box">
          <div className="section-content-text">
            Let us know about how you use OpenDataCam. Apart from that we also think OpenDatacam would be great to…Profiling in spaces like shops, train, stations, drones...
          </div>
        </div>
      </div>
      <div className="px-2 mt-12">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card">
                <div className="card-bordertop" />
                <div className="card-title">Research Project with HTW & Technologiestiftung</div>
                <div className="card-text mt-4">In coordination with the Berlin traffic administration and advising planners, we’d like to explore how the OpenDataCam performs in real-world settings. We’ll take a closer look on accuracy and test scenarios and data evaluation.</div>
                <img className="mt-8" src="static/icons/arrow-right-blue.svg" />
                <img className="w-full mt-4" src="static/images/street-jetsonnano.jpg" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card">
                <div className="card-bordertop" />
                <div className="card-title">Logistics NRW Dashboard</div>
                <div className="card-text mt-4">The “Crowd Solving” project has implemented a Logistics Dashboard including various webcam locations where OpenDataCam is supposed to be implemented to create traffic data around the Neuss Harbour area. </div>
                <img className="mt-8" src="static/icons/arrow-right-green.svg" />
                <img className="w-full mt-4" src="static/images/street-jetsonnano.jpg" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card">
                <div className="card-bordertop" />
                <div className="card-title">Beat the traffic</div>
                <div className="card-text mt-4">In coordination with the Berlin traffic administration and advising planners, we’d like to explore how the OpenDataCam performs in real-world settings. We’ll take a closer look on accuracy and test scenarios and data evaluation.</div>
                <img className="mt-8" src="static/icons/arrow-right-yellow.svg" />
                <img className="w-full mt-4" src="static/images/street-jetsonnano.jpg" />
              </div>
            </a>
          </div>
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
