import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import './DisplayProducts.css';
import data from '../../data';

const DisplayProducts = () => {
  return (
    <section id="displayP-container">
      <div></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
            <div className='carousel'>{data.products.map(product => (
              <SwiperSlide className='swiper'>
                <div className='carousel_item' key={product.slug}>
                  <div className='carousel_img'>
                  <img src={product.image} alt={product.name} />
                  </div>
                  <div className='carousel_text'>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <h4>€{product.price}</h4>
                
                  <button className='btn btn-primary'>Zum Warenkorb</button>
                  </div>
                  
                </div>
                </SwiperSlide>
              ) )}</div>
            
      </Swiper>
      <div></div>
    </section>
  );
};

export default DisplayProducts;
