import Navbar from './Navbar'
import Pricing from './Price'
import Footer from './Footer'
import './price.css';
import { TrustpilotReviews } from './HomePage';

export const Pricerout = () => {
  return (
    <div className="App">
        <Navbar/>
        <Pricing/>
        <TrustpilotReviews/>
        <Footer/>
    </div>
  )
}


