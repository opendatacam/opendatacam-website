import Nav from '../components/Navbar'
import '../styles/index.css'
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Nav />
    <div className='hero'>
      <h1 className='title'>An Open Source Camera to Collect Your Spatial Data</h1>
    </div>
  </Layout>
)
