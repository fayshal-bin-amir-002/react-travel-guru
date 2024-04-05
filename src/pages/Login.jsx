import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import fb from "../assets/fb.png"
import google from "../assets/google.png"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io"; 

const Login = () => {

    const { userSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const location = useLocation();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userSignIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('User logged in successfully');
                {location?.state ? navigate(location.state) : navigate('/')}
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen flex justify-center items-center">
                <form onSubmit={handleSignIn}>
                    <div className="w-full lg:w-[570px] py-[136px]">
                        <div className="border p-7 lg:p-14 rounded">
                            <h3 className="text-2xl font-bold  mb-12">Login</h3>
                            <input type="email" name="email" placeholder="Username or Email" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                            <div className="relative">
                                <input type={show?'text':'password'} name="password" placeholder="Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                                <span onClick={()=>setShow(!show)} className="absolute top-4 right-3 text-2xl cursor-pointer">{show ? <IoMdEye />: <IoIosEyeOff />}</span>
                            </div>
                            <div className="flex items-center justify-between mb-12">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="checkbox" className="checkbox checkbox-secondary" />
                                    <span className="label-text">Remember me</span>
                                </label>
                                <Link to="" className="font-medium text-[#F9A51A] underline">Forgot Password</Link>
                            </div>
                            <button className="btn w-full bg-[#F9A51A] mb-5">Login</button>
                            <p className="font-medium text-center">Don&apos;t have an account? <Link to="/register" className="text-[#F9A51A] underline">Create an account</Link></p>
                        </div>
                        <div className="divider my-8">OR</div>
                        <div className="w-[75%] mx-auto">
                            <button className="btn btn-outline rounded-full w-full mb-2">
                            <img src={fb} className="w-8 mr-auto" /> <span className="mx-auto">Continue with Facebook</span></button>
                            <button className="btn btn-outline rounded-full w-full mb-2">
                            <img src={google} className="w-8 mr-auto" /> <span className="mx-auto">Continue with Google</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;