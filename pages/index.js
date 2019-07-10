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
            font-medium`
          }>
            An Open Source Camera to Collect Your Spatial Data
          </h1>
          <a 
            href="https://github.com/opendatacam/opendatacam" 
            className="btn btn-black inline-flex mt-6 flex items-center justify-center"
          >
            Installation guide
          </a>
        </div>
        <img className="blue-sun background-icon" src="static/background-icons/blue-sun.svg" />
        <img className="red-string background-icon" src="static/background-icons/red-string.svg" />
        <img className="green-camera background-icon" src="static/background-icons/green-camera.svg" />
        <img className="road-yellow background-icon" src="static/background-icons/road-yellow.svg" />
      </div>
    </div>
    <style jsx>{`
      .landing-container {
        position: relative;
        min-height: 600px;
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
        z-index: 0;
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
    `}</style>
  </Layout>
)
