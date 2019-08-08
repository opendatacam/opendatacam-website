import Player from '@vimeo/player';

import Nav from '../components/Navbar';
import '../styles/index.css';
import Layout from '../components/Layout';

const onClickPlay = e => {
  const parent = e.currentTarget.parentElement;
  const iframe = parent.getElementsByTagName('iframe')[0];
  const player = new Player(iframe);

  e.currentTarget.style.display = 'none';
  iframe.style.opacity = '1';

  player.play();
};

export default () => (
  <Layout>
    <div className="landing-container">
      <Nav />
      <div className="hero flex justify-center items-center flex-1">
        <div
          className={`
          text-center
          max-w-lg
          pl-8
          pr-8
          mb-16`}
        >
          <h1
            className={`text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-medium
            relative
            z-10`}
          >
            An open source tool to count moving things
          </h1>
          <a
            href="https://github.com/opendatacam/opendatacam"
            target="_blank"
            className="btn btn-black inline-flex mt-10 flex items-center justify-center"
          >
            Installation guide
          </a>
        </div>
        <img className="blue-sun background-icon w-2/6 sm:w-auto" src="static/background-icons/sun_1.gif" />
        <img
          className="red-string background-icon w-2/6 sm:w-2/6 md:w-auto"
          src="static/background-icons/redwhirl.gif"
        />
        <img className="road-yellow background-icon w-2/6 sm:w-auto" src="static/background-icons/street_1.gif" />
      </div>
    </div>
    <div className="video-responsive">
      <iframe
        src="https://player.vimeo.com/video/351143472"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <img className="" src="static/icons/play-button.svg" onClick={onClickPlay} />
    </div>
    <div className="container mx-auto relative" id="about">
      <img className="yellow-string background-icon hidden md:block" src="static/background-icons/yellowwhirl.gif" />
      <h2 className="section-title">About</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Introduction</div>
          <div className="section-content-text">
            'Open Data Cam' is a tool that helps to quantify the world. It’s here for everyone to use! With computer
            vision Open Data Cam understands and quantifies moving objects. The simple setup allows everybody to become
            an urban data miner.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-1.jpg" alt="Camera" />
        </div>
      </div>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-title">How can OpenDataCam see?</div>
          <div className="section-content-text">
            OpenDataCam consists of a camera attached to a mini computer. It’s running an object detection algorithm
            that counts and tracks moving objects. The board is equipped with a GPU (graphical processing unit), which
            allows it to process many parallel image threads at once. The perfect tool for image analysis and video
            processing.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/about-2.jpg" alt="RJ45 Cables" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Yolo</div>
          <div className="section-content-text">
            On the software side OpenDataCam is running YOLO — an object detection library. YOLO is trained to detect
            objects in images. The attached camera feeds YOLO with a video, YOLO then outputs all objects in each frame.
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
          <iframe
            src="https://player.vimeo.com/video/346340651"
            width="640"
            height="332"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <img className="" src="static/icons/play-button.svg" onClick={onClickPlay} />
        </div>
      </div>
    </div>
    <div className="container mx-auto relative md:mt-32" id="features">
      <img className="blue-arrows background-icon hidden md:block" src="static/background-icons/camera_1.gif" />
      <h2 className="section-title">Features</h2>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">You own the data!</div>
          <div className="section-content-text">
            OpenDataCam is not connected to the cloud, you’re in full control of when to gather it. Via the interface
            you can specify which areas of the picture objects should be counted. Also the camera tracks how things move
            through the frames. Via an easy export function you can access the tally and traces and use it in any
            thinkable way. Going all-in? Use the API to get access to the raw data points.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/own-the-data.jpg" alt="Camera" />
        </div>
      </div>
    </div>
    <div className="container mx-auto relative md:mt-32" id="ethics">
      <img className="green-cloud background-icon hidden md:block" src="static/background-icons/cloud.gif" />
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
          <img className="section-content-img" src="static/images/transparency.jpg" alt="Camera" />
        </div>
      </div>
      <div className="section-content section-content--reverse">
        <div className="section-content-box">
          <div className="section-content-title">Privacy</div>
          <div className="section-content-text">
            As OpenDataCam is an experimental prototype with public facing applications, privacy is something we tried
            to bake into the design of the tool. After getting in touch with Sensor Labs privacy label, we’re currently
            finding ways to apply the label to OpenDataCam.
          </div>
        </div>
        <div className="section-content-box">
          <img className="section-content-img" src="static/images/privacy.jpg" alt="Camera" />
        </div>
      </div>
    </div>
    <div className="container mx-auto md:mt-32" id="testimonials">
      <h2 className="section-title">Open Data Cam in the Wild</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-text">
            After publishing the alpha version, we asked people what they did with it. These selected cases are here to
            show you what you can do with OpenDataCam.
          </div>
        </div>
        <div className="section-content-box">
          <div className="section-content-text">
            Let us know about how you use OpenDataCam. Apart from that we also think OpenDatacam would be great
            to…Profiling in spaces like shops, train, stations, drones...
          </div>
        </div>
      </div>
      <div className="px-2 mt-12">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card md:mt-0">
                <div className="card-bordertop" />
                <div className="card-title card-title--min-height-54px">
                  Research Project with HTW & Technologiestiftung
                </div>
                <div className="card-text mt-4 card-text--min-height-200px">
                  In coordination with the Berlin traffic administration and advising planners, we’d like to explore how
                  the OpenDataCam performs in real-world settings. We’ll take a closer look on accuracy and test
                  scenarios and data evaluation.
                </div>
                <img className="mt-8" src="static/icons/arrow-right-blue.svg" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card md:mt-0">
                <div className="card-bordertop" />
                <div className="card-title card-title--min-height-54px">Logistics NRW Dashboard</div>
                <div className="card-text mt-4 card-text--min-height-200px">
                  The “Crowd Solving” project has implemented a Logistics Dashboard including various webcam locations
                  where OpenDataCam is supposed to be implemented to create traffic data around the Neuss Harbour area.{' '}
                </div>
                <img className="mt-8" src="static/icons/arrow-right-green.svg" />
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/3 px-8">
            <a href="https://beatthetraffic.moovellab.com">
              <div className="card md:mt-0">
                <div className="card-bordertop" />
                <div className="card-title card-title--min-height-54px">Beat the traffic</div>
                <div className="card-text mt-4 card-text--min-height-200px">
                  In coordination with the Berlin traffic administration and advising planners, we’d like to explore how
                  the OpenDataCam performs in real-world settings. We’ll take a closer look on accuracy and test
                  scenarios and data evaluation.
                </div>
                <img className="mt-8" src="static/icons/arrow-right-yellow.svg" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto md:mt-32" id="shoppinglist">
      <h2 className="section-title">Shopping List</h2>
      <div className="section-content">
        <div className="section-content-box">
          <div className="section-content-text">
            We’ve designed and tested OpenDataCam on a few different hardware setups. These are the ones we we suggest
            you to use. Please share us your setups and best practices.
          </div>
        </div>
        <div className="section-content-box">
          <div className="section-content-text">
            Please note, we are not (re)selling or affiliated with the hardware. Check your local IoT retailer for best
            availability.
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 px-6">
            <a href="https://github.com/opendatacam/opendatacam/blob/master/documentation/jetson/JETSON_NANO.md">
              <div className="card lg:mt-0">
                <div className="card-bordertop" />
                <div className="card-title">OpenDataCam + Nano</div>
                <div className="card-text mt-4">
                  small and cheap, limited accuracy at 12 fps, very low power mode (5 W)
                </div>
                <div className="text-green-500 font-medium mt-6">$99.00 USD</div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-6">
            <a href="https://github.com/opendatacam/opendatacam">
              <div className="card lg:mt-0">
                <div className="card-bordertop" />
                <div className="card-title">OpenDatacam + TX2</div>
                <div className="card-text mt-4">
                  large setup medium price, “mid accuracy at X fps, medium power consumption (10 W)
                </div>
                <div className="text-blue-400 font-medium mt-6">$399.00 USD</div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-6">
            <a href="https://github.com/opendatacam/opendatacam">
              <div className="card lg:mt-0">
                <div className="card-bordertop" />
                <div className="card-title">OpenDataCam + Xavier</div>
                <div className="card-text mt-4">
                  large setup at highest price, full accuracy (25 fps), low power consumption (15W)
                </div>
                <div className="text-yellow-400 font-medium mt-6">$699.00 USD</div>
              </div>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-6">
            <a href="https://github.com/opendatacam/opendatacam">
              <div className="card lg:mt-0">
                <div className="card-bordertop" />
                <div className="card-title">On the cloud / local machine</div>
                <div className="card-text mt-4">
                  On demand accuracy depending on server / local machine capacity + IP accessible cam or run on
                  pre-recorded footage
                </div>
                <div className="text-red-500 font-medium mt-6">$0.5 - $1 USD / hour</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-32 mb-48 flex justify-center items-center flex-col relative">
      <img className="red-string-bottom background-icon hidden md:block" src="static/background-icons/red-string.svg" />
      <div
        className={`
        text-center
        md:max-w-lg
        lg:max-w-xl
        pl-8
        pr-8
        text-xl
        md:text-2xl
        lg:text-3xl
        font-medium
        relative
        z-10`}
      >
        As you know, OpenDataCam is open source and non for profit. Please use this Repo to report bugs, request
        features, push your fixes and get in touch with the community.
      </div>
      <a
        href="https://github.com/opendatacam/opendatacam"
        target="_blank"
        className="btn btn-black inline-flex flex items-center justify-center mt-8"
      >
        Github repository
      </a>
      <img className="mr-8" className="yellowArrow" src="static/background-icons/yellowarrow.gif" />
    </div>
    <div className="footer">
      <div className="container mx-auto jsx-526758497">
        <div className="footerContent">
          <div className="card-text">People involved</div>
          <div className="people">
            <div>
              <h1 className="card-title green">Benedikt Groß</h1>
              <p className="card-text">Direction, Concept</p>
            </div>
            <div>
              <h1 className="card-title yellow">Markus Kreutzer</h1>
              <p className="card-text">Design, Concept, Video</p>
            </div>
            <div>
              <h1 className="card-title blue">Thibault Durand</h1>
              <p className="card-text">Development, Concept</p>
            </div>
          </div>
          <div className="people">
            <div>
              <h1 className="card-title red">Raphael Reimann</h1>
              <p className="card-text">Video, Concept</p>
            </div>
            <div>
              <h1 className="card-title blue">Florian Porada</h1>
              <p className="card-text">Development</p>
            </div>
            <div>
              <h1 className="card-title green">Neele Rittmeister</h1>
              <p className="card-text">Illustration</p>
            </div>
          </div>
          <img className="logo" src="static/icons/LabLogo.svg" />
          <div className="copyright">
            <p className="card-text">
              Open Data Cam is a project designed and developed by move lab and collaborators.
            </p>
            <br />
            <p className="card-text">© 2019, moovel Group GmbH</p>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .card-bordertop {
        border-width: 1px;
      }
      .container {
        max-width: 1050px;
      }
      .text-yellow-400 {
        color: #ffe50f;
      }

      .section-content {
        padding-left: 1rem;
        padding-right: 1rem;
        margin-top: 80px;
      }
      .px-6 {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      .card .card-bordertop {
        transition: 0.3s;
      }

      .card:hover .card-bordertop {
        border-color: black;
        transform: translateY(-10px);
      }
      h2 {
        font-size: 5rem !important;
        line-height: 5rem !important;
        margin-top: 150px;
        margin-bottom: 70px;
      }
      @media (max-width: 640px) {
        h2 {
          font-size: 4rem !important;
          line-height: 4rem !important;
          margin-top: 150px;
          margin-bottom: 100px;
        }
      }
      a {
        transition: 0.1s !important;
      }

      .section-content-title,
      .card-title {
        font-size: 1.7rem;
        line-height: 1.9rem !important;
        color: #1d1d1d;
      }
      .landing-container {
        position: relative;
        min-height: 90vh;
        max-height: 900px;
        display: flex;
        flex-direction: column;
      }
      .landing-container h1 {
        line-height: 55px;
        font-weight: regular;
        color: #1d1d1d;
      }

      .rounded-lg {
        border: 0px;
        background-color: #1d1d1d;
      }
      .section-title {
        width: 40rem;
        left: 50%;
        transform: translateX(-50%);
        -webkit-ransform: translateX(-50%);
        -moz-ransform: translateX(-50%);
        -ms-ransform: translateX(-50%);
        -o-ransform: translateX(-50%);
        position: relative;
      }
      .mb-48 {
        margin-bottom: 100px;
      }
      .video-responsive img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-ransform: translate(-50%, -50%);
        -moz-ransform: translate(-50%, -50%);
        -ms-ransform: translate(-50%, -50%);
        -o-ransform: translate(-50%, -50%);
        transition: 0.1s;
        width: 130px;
      }
      .video-responsive img:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      @media (max-width: 640px) {
        .video-responsive img {
          width: 80px;
        }
        .section-title {
          width: 90%;
        }
      }

      .rounded-lg{
      }

      .max-w-lg {
        max-width: 40rem;
      }


      .section-content-text,
      .card-text,
      .card-title {
        text-align: left;
        line-height: 22px;
      }
      .text-center {
        line-height: 35px;
      }
      .text-blue-400 {
        color: #05d6ff;
      }

      @media (max-width: 1023px) {
        .landing-container h1 {
          line-height: 2.6rem;
          font-size: 2.5rem;
        }
        .text-center {
          line-height: 30px;
        }
      }
      @media (max-width: 640px) {
        .landing-container h1 {
          line-height: 2.7rem;
          font-size: 2.5rem;
        }
        .text-center {
          line-height: 25px;
        }
      }
      @media (max-width: 800px) {
        .card-bordertop {
          margin-top: 80px !important;
        }
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
        left: 20%;
        width: 20%;
      }

      .red-string {
        position: absolute;
        top: 20vh;
        right: 1rem;
        width: 21vw;
      }
      .yellowArrow{
        width: 9vw;
      }
      .red-string-bottom {
        margin-bottom: 35px;
        display: none;
      }

      .green-camera {
        position: absolute;
        bottom: 10%;
        right: 5%;
        display: none;
      }

      .road-yellow {
        position: absolute;
        bottom: 10%;
        left: 5%;
        width: 13vw;
      }

      .yellow-string {
        position: absolute;
        top: 250px;
        right: 0;
        width: 300px;
        display: none;
      }

      .blue-arrows {
        position: absolute;
        left: 0;
        top: 0px;
        width: 200px;
        display: none;
      }

      .green-cloud {
        position: absolute;
        right: 0px;
        top: 20px;
        width: 170px;
        display: none;
      }

      .red-string-camera {
        position: absolute;
        left: 0px;
        top: 100px;
      }

      @media (max-width: 800px) {
        .green-camera {
          width: 120px;
        }
        .road-yellow {
          width: 70px;
          bottom: 3%;
        }
        .blue-sun {
          width: 110px;
          left: 130px;
        }
        .red-string {
          width: 100px;
          top: 57vh;
        }
        .yellowArrow{
          width: 80px;
        }
      }

      .video-responsive {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
        background-color: #1d1d1d;
      }
      .video-responsive iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: 0.2;
      }
      .footer {
        background-color: #1d1d1d;
        width: 100%;
        color: white !important;
      }

      .footerContent {
        margin-left: 2rem;
        margin-right: 2rem;
        padding-top: 100px;
        padding-bottom: 50px;
        position: relative;
      }
      .people {
        display: flex;
      }
      @media (max-width: 1000px) {
        .people {
          display: block;
        }
      }
      .footerContent div {
        width: 100%;
      }
      .footerContent .card-title {
        margin-top: 40px;
      }
      .footerContent .card-text {
        margin-top: 5px;
      }

      .footerContent .green {
        color: #3eac5b;
      }
      .footerContent .yellow {
        color: #ffe50f;
      }
      .footerContent .blue {
        color: #05d6ff;
      }
      .footerContent .red {
        color: #ff694b;
      }
      .footerContent .logo {
        width: 30%;
        position: absolute;
        right: 0;
        bottom: 50px;
      }
      .footerContent .copyright {
        margin-top: 220px;
        width: 50%;
      }
      @media (max-width: 640px) {
        .footerContent {
          padding-bottom: 50px;
        }
        .footerContent .logo {
          width: 100%;
          margin-top: 150px;
          position: relative;
          bottom: 0;
        }
        .footerContent .copyright {
          margin-top: 20px;
          width: 100%;
        }
      }
    `}</style>
  </Layout>
);
