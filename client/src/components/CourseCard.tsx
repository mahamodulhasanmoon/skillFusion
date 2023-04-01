import course1 from '../assets/images/course1.png'

const CourseCard = () => {
    return (
        <div className="bg-white p-3 shadow-md rounded hover:bg-shade hover:border-shade_deep border-2">
          <div className="img">
            <img src={course1} alt="img" />
          </div>
          <div className="courseinfo py-6">
            <h2 className='text-xl font-bold text-text'>Career Track: Full Stack (MERN) Web Development</h2>
            <div className="price mt-6 flex">
                <h6 className='text-2xl font-bold text-primary mx-2'>5500 ৳</h6>
                <del className='text-2xl font-bold text-[#aaa]'>6500 ৳</del>
            </div>
         
          </div>
          <div className="btn mt-3">
           <button className='uppercase w-full px-3 py-2 bg-primary font-bold tracking-widest text-white'>Enroll Now</button>
           </div>
        </div>
    );
};

export default CourseCard;