import { SlCamrecorder } from 'react-icons/sl'

const Benifits = () => {
    return (
        <div className="py-5 bg-white  hover:border-shade_deep border-2 rounded-xl hover:bg-shade shadow-md ">


        <div className="flex justify-between">



            <div className="items mx-3 flex justify-between items-left">
                <div className='flex items-center'>
                    <SlCamrecorder className="text-4xl mr-4 text-redtype" />
                </div>
                <div className="">
                    <h2 className="text-2xl text-text text-left font-bold">Pre - recorded class</h2>
                    <p className="text-lg text-left text-text  font-medium">you can access anywhere</p>

                </div>

            </div>

        </div>



    </div>
    );
};

export default Benifits;