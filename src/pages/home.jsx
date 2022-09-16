import '../styles/home.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'

const Home = () => {
  const [ activeSlice , setActiveSlice ] = useState(1)
  return (
    <div className='home'>
        <div className='home-wrapper'>
            <nav>
                <img src={require('../assets/logo.png')} alt=""/>
                <img src={require('../assets/cutlery.png')} alt=""/>
            </nav>
            <section>
            <Swiper
              onFromEdge={() => setActiveSlice(2)}
              onReachBeginning={()=> setActiveSlice(1)}
              onReachEnd={()=> setActiveSlice(3)}
              loop={false}
              spaceBetween={10}
              modules={[Navigation, Thumbs]}
              className='product-images-slider-thumbs'
              slidesPerView={1}
              >
                {
                    slides.map((props) => (
                        <SwiperSlide key={props.key}>
                          <div className='slide'>
                              <span><img src={require("../assets/chef-"+props.src+".png")} alt=""/></span>
                              <h2>{props.text}</h2>
                              <h3>{props.subtitle}</h3>
                          </div>
                        </SwiperSlide>
                    ))
                }
              </Swiper>
                <div className='active'>
                    <button className={activeSlice === 1?'active-child' : 'none' }></button>
                    <button className={activeSlice === 2?'active-child' : 'none' }></button>
                    <button className={activeSlice === 3?'active-child' : 'none' }></button>
                </div>
            </section>
            <footer>
                {/* <img src={require('../assets/next.png')} alt=""/> */}
            </footer>
        </div>
    </div>
  )
}
const slides = [
    {
        src: 1,
        text: 'Choose',
        subtitle: 'Select a Cook from the catalogue of Cooks available',
        key: 1,
    },
    {
        src: 1,
        text: 'Make An Order',
        subtitle: 'Book an Appiontment, or make an order ',
        key: 2,
    },
    {
        src: 1,
        text: 'Recieve',
        subtitle: 'Get your order delivered to the required destination of your choice',
        key: 3,
    }
]

export default Home