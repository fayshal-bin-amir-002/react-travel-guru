import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';

const NavBar = () => {

    const { user, userSignOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('User log out successfully');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className=" container mx-auto">
            <div className="navbar fixed top-0 z-10 py-5 lg:py-10 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl lg:text-4xl">Travel <span className=" text-accent">Guru</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <label className="input input-bordered text-white bg-transparent border-white outline-white focus:outline-none  flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="navbar-end">
                    <ul className="hidden lg:flex menu menu-horizontal pr-6 text-base font-medium">
                        {navLinks}
                    </ul>
                    {
                        user ?
                            <div className="dropdown dropdown-end text-black">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box min-w-52">
                                    <li><small>{user.email}</small></li>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a onClick={handleSignOut}>Logout</a></li>
                                </ul>
                            </div> :
                            <Link to="/login" className="btn bg-[#F9A51A] border-none">Login</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default NavBar;