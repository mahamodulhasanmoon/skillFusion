
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper";


const Hired = () => {

    const images = [
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
        "https://cdn.ostad.app//public/upload/2022-11-15T03-32-34.339Z-Wire-Logo.png",
    ]
    return (
        <div className="py-20 bg-shade">
            <h2 className="text-2xl font-bold text-center mb-10">Who Hired  Our Most of the Students</h2>

            <div className="slider container mx-auto">
            <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
       grabCursor={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode,]}
        className="mySwiper"
      >
        {
            images.map((image,index) =>    
                 <SwiperSlide
                 key={index}
                 >
                <img  className="" src={image} alt="" />
            </SwiperSlide> )
        }


      </Swiper>
            </div>
            
        </div>
    );
};

export default Hired;