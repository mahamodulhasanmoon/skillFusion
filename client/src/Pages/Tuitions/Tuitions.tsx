import React, { useState } from 'react';
import TuitionBanner from './Tuition/TuitionBanner';
import CourseHeader from '../courses/courses/CourseHeader';
import CourseAside from '../courses/courses/CourseAside';


import Pagination from '../../components/Pagination';
import TuitionDetails from './Tuition/TuitionDetails';

const Tuitions = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const tuitionPerPage = 10;

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };
    return (
        <div className='bg-gray-600 '>
            <TuitionBanner/>
            <div className="bg-shade container mx-auto mt-[-130px] shadow-xl rounded px-6 py-3">
            <main className='relative'>
                    <CourseHeader />

                    <div className="grid " style={{ gridTemplateColumns: '350px 1fr' }}>

                        <CourseAside />
                        <div>
                        <div className="grid grid-cols-1 gap-5 my-6 mt-10">
                            <TuitionDetails/>
                            <TuitionDetails/>
                            <TuitionDetails/>
                            <TuitionDetails/>
                            <TuitionDetails/>
                           

                           
                        </div>
                        
                        <Pagination
                           currentPage={currentPage}
                           totalPages={Math.ceil(50 / tuitionPerPage)}
                           onPageChange={handlePageChange}
                            />

                        </div>




                    </div>




                </main>
            </div>
        </div>
    );
};

export default Tuitions;