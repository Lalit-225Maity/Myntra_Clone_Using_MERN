import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Home.css'
import { Product, Cloths } from '../Home/Image'
const Home = () => {
  const [val, setval] = useState(0);
  const [start, setstart] = useState(0)
  useEffect(() => {
    const ProductInterval = setInterval(() => {
      setval((i) => { return (i + 1) % Product.length })
    }, 9000);

    return () => clearInterval(ProductInterval)
  }, [Image.length])
  useEffect(() => {
    const Inter = setInterval(() => {
      setstart((i) => { return (i + 1) % Cloths.length })
    }, 8000);

    return () => clearInterval(Inter)
  }, [Cloths.length])

  return (
    <div className='home'>
      <Helmet>
        <link rel="shortcut icon" href="/free-myntra-icon-svg-download-png-2249158.png" type="image/x-icon" />
        <title>myntra</title>
      </Helmet>
      <div className="home-image">
        <img src={Product[((val - 1) + Product.length) % Product.length].img} alt="" />
        <img src={Product[val].img} alt="" />
        <img src={Product[(val + 1) % Product.length].img} alt="" />
      </div>
      <div className="home-cloths">
      <h1>Great Deals</h1>
      <div className="cloths-deals">
           {Cloths.slice(start, start + 6).map((i)=>(
          <img src={i.image} alt=""   />
        ))}
      </div>
      </div>
    </div>
  )
}

export default Home
