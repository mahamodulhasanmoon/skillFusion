import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/NavBar";
import {Outlet} from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';


const Main = () => {
    return (
        <div className="bg-[#faf5f7] min-h-screen">
           <NavBar/>
           <Outlet/>
           <Footer/>
           <a href="hover:transition duration-700 https://api.whatsapp.com/send?phone=+8801771517322" className="fixed bottom-4 right-3 m-4  hover:shadow-lg shadow-shade_deep rounded-full ">
      <FaWhatsapp className="hover:transition duration-700 w-12 h-12 text-white bg-green-500 rounded-full hover:w-14 hover:h-14 " />
    </a>

        </div>
    );
};

export default Main;