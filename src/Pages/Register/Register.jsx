import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const {googleSingUp,createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password,name)
        setRegisterError('')
        setSuccess('')

        // error handling
        if(password.length < 6){
            setRegisterError('Password should be At Least 6 characters or longer')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one upperCase')
            return;
          }
          if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
            setRegisterError('Your password should have one Special Character')
            return;
          }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            setSuccess('Your Register Successfully')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }

    // google sign up
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
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input border border-[#CC009C]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input border border-[#CC009C]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input border border-[#CC009C]" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-secondary">Register</button>
                        </div>
                        <div className="form-control mt-6">  
                         <button onClick={handleGoogle} className="btn w-full btn-outline btn-secondary"> <FcGoogle className='text-[31px]'></FcGoogle> Register With Google</button>
                        </div>
                        <p className='text-center'>Already have an account?<Link to='/login' className="text-[#CC009C] font-bold">Login</Link></p>
                        {
                            registerError && <p className='text-center text-[#FF0000]'>{registerError}</p>
                        }
                        {
                            success && <p className='text-center text-[#CC009C]'>{success}</p>
                        }
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Register;