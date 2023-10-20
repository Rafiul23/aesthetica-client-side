
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    const links = <>

        <li className='mt-3 mr-2'><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#36aabe] text-[#ffffff] font-bold p-3 rounded-lg " : "bg-[#FF81C0] p-3 rounded-lg text-white"
            }
        >Home</NavLink></li>

        <li className='mt-3 mr-2'><NavLink to='/addProduct'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#36aabe] text-white font-bold p-3 rounded-lg " : "bg-[#FF81C0] p-3 rounded-lg text-white"
            }
        >Add Product</NavLink></li>

        <li className='mt-3 mr-2'><NavLink to='/myCart'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#36aabe] text-white font-bold p-3 rounded-lg " : "bg-[#FF81C0] p-3 rounded-lg text-white"
            }
        >My Cart</NavLink></li>

        <li className='mt-3 mr-2'><NavLink to='/login'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#36aabe] text-white font-bold p-3 rounded-lg " : "bg-[#FF81C0] p-3 rounded-lg text-white"
            }
        >Login</NavLink></li>



        
    </>

    return (
        <div className="navbar py-8 bg-[#000000]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {links}

                    </ul>
                </div>
                <a className=" text-[#36aabe] normal-case font-bold text-3xl">Aesthetica</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">

               {links}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register' className='btn bg-[#5ebccd] text-white '>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;