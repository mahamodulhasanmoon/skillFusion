import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Navbar/NavBar";
import {Outlet} from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';
import WhatsAppWeget from "../components/WhatsAppWeget";


const Main = () => {
    return (
        <div className="bg-[#faf5f7] min-h-screen">
           <NavBar/>
           <Outlet/>
           <Footer/>

      <WhatsAppWeget/>
      
   

        </div>
    );
};

export default Main;