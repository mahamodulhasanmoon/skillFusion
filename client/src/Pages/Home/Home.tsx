import Facility from "./Home/Facility";
import Hero from "./Home/Hero";
import Hired from "./Home/Hired";
import PopularCourses from "./Home/PopularCourses";
import Tracks from "./Home/Tracks";
import Tuitions from "./Home/Tuitions";


const Home = () => {
    return (
        <div>
           <Hero/>
           <Tracks/>
           <Hired/>
           <Facility/>
           <PopularCourses/>
           <Tuitions/>
        </div>
    );
};

export default Home;