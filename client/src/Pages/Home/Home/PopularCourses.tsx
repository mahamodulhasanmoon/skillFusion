import { Link } from "react-router-dom";
import CourseCard from "../../../components/CourseCard";

const PopularCourses = () => {
  return (
    <div className=" py-20 bg-shade">
        <div className="max-w-[600px] mx-auto mb-10 text-center">

        <h2 className="text-center text-4xl text-text font-bold ">Our Programs</h2>
        <p className="text-text text-lg text-center mt-6">Empowering individuals to achieve their professional goals through targeted skill development</p>
        </div>
       
      <div className="container mx-auto">
        {/* heading */}

        <div className="mb-20">
          <div className=" md:flex  justify-between ">
            <h2 className="text-center mb-6 md:text-left md:mb-0 text-4xl font-bold text-text  leading-tight">
              Best computer science program
            </h2>
            <Link
              className="bg-primary  px-4 py-2 text-center mx-10 my-19 block font-semibold text-lg text-white rounded"
              to="/"
            >
              See All
            </Link>
          </div>

          {/* cards on courses */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
        {/* programmer two */}
        <div className="mb-20">
          <div className="flex justify-between">
            <h2 className="text-4xl font-bold text-text  leading-tight">
              Best Career Track program
            </h2>
            <Link
              className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded"
              to="/"
            >
              See All
            </Link>
          </div>

          {/* cards on courses */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
