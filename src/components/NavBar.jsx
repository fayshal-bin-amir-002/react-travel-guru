import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const navLinks = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className=" container mx-auto">
            <div className="navbar fixed top-0 z-10 py-5 lg:py-10 text-white container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl lg:text-4xl">Travel <span className=" text-accent">Guru</span></a>
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
                    <Link className="btn bg-[#F9A51A] border-none">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;