import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import './Navber.css'



const Navber = () => {

    const {logOut,user} = useContext(AuthContext)
    console.log(user)
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    const links = <> 
       <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
       <li><NavLink className='mr-4' to='/shop'>Shop</NavLink></li>
       <li><NavLink className='mr-4' to='/blog'>Blog</NavLink></li>
        <li><NavLink className='mr-4' to='/login'>Login</NavLink></li>
        <li><NavLink className='mr-4' to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-white md:px-16 py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {links}
                        </ul>
                    </div>
                   
                    <h2 className="text-3xl font-bold"><span className="text-[#ed22bd]">Social</span> Event</h2>
                </div>
                <nav className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                       {links}
                    </ul>
                </nav>
                <div className="navbar-end">
                    {/* {
                        user?.displayName                    
                    }
                   {
                    user ? <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>
                    : <Link to='/login'><button onClick={handleLogOut} className="btn btn-outline btn-secondary">Login</button></Link>
                   } */}
                   {
                     user?.email ? <div className="dropdown dropdown-end">
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                         <div className="w-16 rounded-full">
                             <img src={user.photoURL} />
                         </div>
                     </label>
                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         <li>
                         <button className="btn btn-sm my-2  btn-secondary text-white">{user.displayName}</button>
                         </li>
                         <li>
                             <button onClick={handleLogOut} className="btn btn-sm   btn-secondary text-white">Logout</button>

                         </li>
                     </ul>
                 </div>
                     :
                     <Link to='/login'><button onClick={handleLogOut} className="btn btn-outline btn-secondary">Login</button></Link>
                   }
                </div>
            </div>
            
        </div>
    );
};

export default Navber;