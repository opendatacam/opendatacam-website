import Nav from '../components/Navbar'
import '../styles/index.css'
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Nav />
    <div className='hero flex justify-center'>
      <h1 className='
        text-2xl 
        sm:text-3xl 
        md:text-4xl 
        lg:text-5xl 
        font-medium
        text-center
        max-w-lg
        pl-8
        pr-8'>
        An Open Source Camera to Collect Your Spatial Data
      </h1>
    </div>
  </Layout>
)
