import adsBanner from '../../assets/images/ads.png'
import CourseAside from './courses/CourseAside';
import CourseHeader from './courses/CourseHeader';




const Courses = () => {
    return (
        <div className="min-h-[80vh]">
           
           <div className="container mx-auto">

{/* ads */}
<div className="ads py-5">
    <img className='rounded-xl' src={adsBanner} alt="ads" />
</div>

{/* courses page Layouts */}

<main className='grid grid-cols-[300px 1fr]'>
   <CourseAside/>
   <CourseHeader/>
   
</main>


           </div>


        </div>
    );
};

export default Courses;