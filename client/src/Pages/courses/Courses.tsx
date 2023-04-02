import { useState } from 'react';
import adsBanner from '../../assets/images/ads.png'
import CourseCard from '../../components/CourseCard';
import Pagination from '../../components/Pagination';

import CourseAside from './courses/CourseAside';
import CourseHeader from './courses/CourseHeader';




const Courses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 8;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
    return (
        <div className="min-h-[80vh] bg-shade">

            <div className="container mx-auto">

                {/* ads */}
                <div className="ads py-5">
                    <img className='rounded-xl' src={adsBanner} alt="ads" />
                </div>

                {/* courses page Layouts */}

                <main className='relative'>
                    <CourseHeader />

                    <div className="grid " style={{ gridTemplateColumns: '350px 1fr' }}>

                        <CourseAside />
                        <div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />

                           
                        </div>
                        
                        <Pagination
                           currentPage={currentPage}
                           totalPages={Math.ceil(50 / postsPerPage)}
                           onPageChange={handlePageChange}
                            />

                        </div>




                    </div>




                </main>


            </div>


        </div>
    );
};

export default Courses;