import logo  from '../../../assets/images/logo.png'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-gray-900">
           <div className="container mx-auto  text-white flex justify-between items-center">
            <div className="logo">
            <img className='h-[80px]' src={logo} alt="" />
            </div>
            <div className="menus">
            <NavLink className=' mx-5 font-semibold text-lg' to='/login'>Home</NavLink>
            <NavLink className=' mx-5 font-semibold text-lg' to='/courses'>courses</NavLink>
            <NavLink className=' mx-5 font-semibold text-lg' to='/find-tutions'>Find Tuitions</NavLink>
            <NavLink className=' mx-5 font-semibold text-lg' to='/login'>contact us</NavLink>


<NavLink className='bg-primary px-4 py-2 rounded' to='/login'>Login</NavLink>

            </div>
           </div>
        </nav>
    );
};

export default NavBar;