import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";


const TuitionDetails = () => {
    return (
<div className="bg-white p-5 text-left w-[95%] mb-3 shadow-md rounded">
        {/* class card  */}
        <small className="text-muted">Job ID-14498</small>
        <p className="">Female Tutor Needed for English Version</p>
        <div className="flex justify-between py-2">
            <p className="text-text text-lg font-medium">
                <span className="font-bold text-primary ">Category :</span>{" "}
                English Version{" "}
            </p>

            <p className="text-text text-lg font-medium">
                <span className="font-bold text-primary ">Class :</span>{" "}
                Eight
            </p>

            <p className="text-text text-md font-medium">
                <span className="font-bold text-primary ">Sellary :</span>{" "}
                5000 tk
            </p>
        </div>

        {/* subjects */}
        <p>
            <b>Subjects :</b> English, Home economics, Islamic Studies,
            Social science
        </p>
        <p className="pt-2"><b >5 Days/Week </b></p>

        {/* other info */}

        <div className="flex justify-between items-center my-2">
            <div className="">
               <div className="flex items-center">
               <SlLocationPin className="text-2xl mr-2 font-bold"/>  <address className="text-2xl font-semibold">Malibagh, Dhaka </address>
               </div>
               <small  className=" font-bold text-[#aaa]">Post 1 hour ago</small>
            </div>
            <div >

            <Link
className="bg-primary px-4 py-2 font-semibold text-lg text-white rounded"
to="/"
>
See Details
</Link>

            </div>
        </div>



    </div>
    );
};

export default TuitionDetails;