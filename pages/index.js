import Nav from '../components/Navbar'
import '../styles/index.css'
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Nav />
    <div className='hero'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center'>
        An Open Source Camera to Collect Your Spatial Data
      </h1>
    </div>
  </Layout>
)
