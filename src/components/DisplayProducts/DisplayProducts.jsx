import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Img2 from '../../assets/krawatte7.png';
import Img3 from '../../assets/krawatte8.png';
import Img4 from '../../assets/krawatte9.png';
import Img5 from '../../assets/krawatte10.png';
import Img6 from '../../assets/krawatte11.png';
import Img1 from '../../assets/krawatte1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './DisplayProducts.css';

const DisplayProducts = () => {
  return (
    <section id="displayP-container">
      <div></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img1} alt="" />
            </div>
            <div className="product-info">
              <h4>Toto</h4>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img2} alt="" />
            </div>
            <div className="product-info">
              <h4>Dorothy</h4>
              
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img3} alt="" />
            </div>
            <div className="product-info">
              <h4>Le Fleur</h4>
              
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img4} alt="" />
            </div>
            <div className="product-info">
              <h4>Renny</h4>
              
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img5} alt="" />
            </div>
            <div className="product-info">
              <h4>Nannu</h4>

            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img6} alt="" />
            </div>
            <div className="product-info">
              <h4>Le Azule</h4>
            </div>
          </article>
        </SwiperSlide>
        
        
        
        
      </Swiper>
      <div></div>
    </section>
  );
};

export default DisplayProducts;
