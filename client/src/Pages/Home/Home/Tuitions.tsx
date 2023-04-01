import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";

import { SwiperSlide, Swiper } from "swiper/react";


import TutionCard from "../../../components/TutionCard";

const Tuitions = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="max-w-[700px] mx-auto mb-10 text-center">
        <h2 className="text-center text-4xl text-text font-bold ">
          Expert Tutor with Qualifications in Education and Tutoring
        </h2>
        <p className="text-text text-lg text-center mt-6">
          I am a highly qualified tutor with a background in education and years
          of experience providing individualized instruction to students of all
          ages and abilities.
        </p>
      </div>
      {/* available tuition part */}
      <div className="flex justify-between mt-5">
        <h2 className="text-4xl font-bold text-text   leading-tight">
          Available tuition Program
        </h2>
        <Link
          className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded"
          to="/"
        >
          See All
        </Link>
      </div>

      {/* available tuitions  sliders*/}
      <div className="max-w-[900px] mx-auto  my-20">
        <div className="bg-white hover:bg-shade shadow-lg border-2 hover:border-shade_deep rounded">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper my-3 hover:bg-shade"
          >
            <SwiperSlide className="hover:bg-shade">
              <TutionCard />
            </SwiperSlide>
            <SwiperSlide className="hover:bg-shade">
              <TutionCard />
            </SwiperSlide>
            <SwiperSlide className="hover:bg-shade">
              <TutionCard />
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Tuitions;
