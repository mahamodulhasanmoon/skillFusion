import { useSelector } from 'react-redux';
import logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../../app/store';

const NavBar = () => {

const email = "a"
const username = "akash"

    return (
        <nav className="bg-gray-900 sticky top-0 z-50">
            <div className="container mx-auto  text-white flex justify-between items-center">
                <div className="logo">
                    <img className='h-[60px]' src={logo} alt="" />
                </div>
                <div className="menus flex items-center px-2">
                    <div className='md:block  hidden'>
                        <NavLink className=' mx-5 font-semibold text-lg' to='/'>Home</NavLink>
                        <NavLink className=' mx-5 font-semibold text-lg' to='/courses'>courses</NavLink>
                        <NavLink className=' mx-5 font-semibold text-lg' to='/find-tutions'>Find Tuitions</NavLink>
                        <NavLink className=' mx-5 font-semibold text-lg' to='/tutors'>Tutors</NavLink>
                    </div>
{/* <div className="md:hidden flex items-center flex-col">
    <span className='bg-white h-[2px] w-[30px]'>2</span>
    <span className='bg-white h-[2px] w-[30px]'>2</span>
    <span className='bg-white h-[2px] w-[30px]'>2</span>
</div> */}

                   <div>
                    {
                        !email?  <NavLink className='bg-primary px-4 py-2 rounded' to='/login'>Login</NavLink>
                        :
                        <NavLink className='bg-primary px-4 py-2 rounded' to='/login'>{username}</NavLink>
                    }
                  
                   </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;