import { FaSearch } from "react-icons/fa";


const CourseHeader = () => {
    return (
        <div className="flex items-center justify-between mt-6 sticky top-0">
           <h4 className="text-lg font-semibold">Showing 1-6 Of 15 Results</h4>
           <div className="searchBox flex items-center bg-[#C5D7E8] p-2 rounded">
           <input type="text" placeholder="search"/>
           <FaSearch/>
           </div>
        </div>
    );
};

export default CourseHeader;