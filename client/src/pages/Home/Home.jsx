import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import './Home.css'
import { Product, Cloths, DisCount } from '../Home/Image'
const Home = () => {
  const [val, setval] = useState(0);
  const [start, setstart] = useState(0);
  const [prev, setprev] = useState(0);
  const items=5;
  const handlenext=()=>{
    setprev((i)=>{
      if((i+items>=DisCount.length)) return 0;
       return i+1;
    })
  }
  const handleprev=()=>{
    setprev((i)=>{
      if(i==0) return 0;
      return i-1;
    })
  }
  useEffect(() => {
    const ProductInterval = setInterval(() => {
      setval((i) => { return (i + 1) % Product.length })
    }, 9000);

    return () => clearInterval(ProductInterval)
  }, [Image.length])
  useEffect(() => {
    const Inter = setInterval(() => {
      setstart((i) => { return (i + 1) % 4 })
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
          {Cloths.slice(start, start + 6).map((i) => (
            <div className="deals-details-container">
              <img src={i.image} alt="" />
              <p>{i.offer}</p>
              <h4>{i.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="first-discount">
        <h2>First Time on Discount 50-60% off</h2>
        <div className="discount-details">
          <button onClick={handleprev}><GrFormPrevious /></button>
          {DisCount.slice(prev,items+prev).map((i) => (
            <img src={i.img} alt="" />
          ))}
          <button onClick={handlenext}><MdNavigateNext className='icon_15' /></button>
        </div>

      </div>
    </div>
  )
}

export default Home
