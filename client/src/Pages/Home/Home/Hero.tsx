import banner from '../../../assets/images/hero.png';


const Hero = () => {
    return (
        <div className=" py-20 bg-shade min-h-[600px]">
           <div className="grid grid-col-reverse md:grid-cols-2 container mx-auto">
            <div className="content flex justify-center flex-col">
               <div>
                 <h2 className='text-5xl font-bold text-text leading-tight mb-3'>Elevate your  Skills and</h2>
                <h2 className='text-5xl font-bold text-primary leading-tight mb-3'>Your Future</h2>
                <p className='text-lg'>With the helping of E-learning,Create Your own path and drive your skill in your own achive
                    
                </p>

               </div>
                <div className="button my-5 ">
                <button className=" px-4 py-2 mr-3 text-white bg-primary border-2 border-primary uppercase font-semibold">
            set your goal
        </button>

                <button className=" px-4 py-2 ml-3 text-primary bg-transparent border-2 border-primary uppercase font-semibold">
            set your goal
        </button>
                </div>
                
            </div>
            <div className="image flex items-end">
                <img src={banner} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Hero;