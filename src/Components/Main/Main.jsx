import { useEffect } from 'react';
import data from '../../Assets/data.js';
import Aos from "aos";
import 'aos/dist/aos.css'

import { HiOutlineLocationMarker,HiOutlineClipboardCheck  } from "react-icons/hi";


import './main.scss'
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right"  className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {data.map((item)=>{
          return(
            <div key={item.id} data-aos="fade-up" className="singleDestination">
              <div className='imageDiv'>
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className='cardInfo'>
                <h4 className='destTitle'>{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{item.grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>
                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className="icon"/>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Main