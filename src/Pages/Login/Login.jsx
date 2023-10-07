import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const {googleSingUp,signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleSignIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?. state? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }

    // google sign in
    const handleGoogle = ()=>{
        googleSingUp()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero my-16">              
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input border border-[#CC009C]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input border border-[#CC009C]" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline  btn-secondary">Login</button>
                            </div>
                            <div className="form-control mt-6">  
                         <button onClick={handleGoogle} className="btn w-full btn-outline btn-secondary"> <FcGoogle className='text-[31px]'></FcGoogle> Login With Google</button>
                        </div>
                        <p className='text-center'>Don’t have an account?<Link to='/register' className="text-[#CC009C] font-bold">Register</Link></p>
                        </form>                    
                </div>
            </div>
        </div>
    );
};

export default Login;