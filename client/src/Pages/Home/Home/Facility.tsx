
import liveImg from '../../../assets/images/liveClass.png'
import Benifits from '../../../components/Benifit';





const Facility = () => {
    return (
        <div className="container mx-auto py-20 ">
            <div className="max-w-[600px] mx-auto">
                <h4 className="   text-primary   text-center px-3 rounded-full font-bold">
                    services
                </h4>
                <h2 className='text-center mt-5 text-4xl font-bold'>Which type of service we provide</h2>
                <p className='mt-5'>Excel in your studies with top tutors and programming courses on Skill Fusion, the go-to platform for skill development and job placement.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-20 mt-20 items-center">

                <div className="content col-auto md:col-span-2">

                    <div className="grid  sm:grid-cols-2 gap-6">
                      <Benifits/>
                      <Benifits/>
                      <Benifits/>
                      <Benifits/>
                    </div>


                </div>
                <div className="image ">
                    <img className='w-full' src={liveImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Facility;