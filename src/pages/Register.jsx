import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import fb from "../assets/fb.png"
import google from "../assets/google.png"
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { IoMdEye, IoIosEyeOff } from "react-icons/io"; 

const Register = () => {

    const navigate = useNavigate();
    const { userSignUp } = useContext(AuthContext);
    const [error, setError] = useState('');

    const [show, setShow] = useState(false);
    const [showP, setShowP] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        setError('');
        
        if(password.length < 6) {
            setError('Password length should be minimum 6');
            return;
        }
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            setError("Password contain minimum one digit, uppercase and lowercase character!");
            return;
        }
        if(password !== confirmPassword) {
            setError("Password & Confirm password did not match!");
            return;
        }

        userSignUp(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success('User register successfully');
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen flex justify-center items-center">
                <form onSubmit={handleSignUp}>
                    <div className="w-full lg:w-[570px] py-[136px]">
                        <div className="border p-7 lg:p-14 rounded">
                            <h3 className="text-2xl font-bold  mb-12">Create an account</h3>
                            <input type="text" placeholder="First Name" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <input type="text" placeholder="Last Name" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <input type="email" name="email" placeholder="Username or Email" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                            <div className="relative">
                                <input type={show?'text':'password'} name="password" placeholder="Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                                <span onClick={()=>setShow(!show)} className="absolute top-4 right-3 text-2xl cursor-pointer">{show ? <IoMdEye />: <IoIosEyeOff />}</span>
                                <small className="text-red-500 font-semibold">{error}</small>
                            </div>
                            <div className="relative">
                                <input type={showP?'text':'password'} name="confirmPassword" placeholder="Confirm Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" required />
                                <span onClick={()=>setShowP(!showP)} className="absolute top-4 right-3 text-2xl cursor-pointer">{showP ? <IoMdEye />: <IoIosEyeOff />}</span>
                            </div>
                            <button className="btn w-full bg-[#F9A51A] mb-5">Create an account</button>
                            <p className="font-medium text-center">Already have an account? <Link to="/login" className="text-[#F9A51A] underline">Login</Link></p>
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

export default Register;