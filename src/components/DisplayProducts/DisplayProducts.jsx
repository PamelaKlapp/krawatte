import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from '../../assets/krawatte2.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './DisplayProducts.css';

const DisplayProducts = () => {
  return (
    <div className="displayP-container">
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
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h4>Krawatte Le Wein</h4>
              <br />
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h4>Krawatte Le Wein</h4>
              <br />
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article>
            <div className="image">
              <img src={Img} alt="" />
            </div>
            <div className="product-info">
              <h5>Krawatte Le Wein</h5>
              <a href="">Mehr..</a>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <div></div>
    </div>
  );
};

export default DisplayProducts;
