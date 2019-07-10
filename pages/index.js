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
      <iframe src="https://player.vimeo.com/video/260744286" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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
        bottom: 3rem;
        right: 5%;
      }

      .road-yellow {
        position: absolute;
        bottom: 1rem;
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
