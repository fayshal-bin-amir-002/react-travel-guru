import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import fb from "../assets/fb.png"
import google from "../assets/google.png"

const Register = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen flex justify-center items-center">
                <form>
                    <div className="w-full lg:w-[570px] py-[136px]">
                        <div className="border p-7 lg:p-14 rounded">
                            <h3 className="text-2xl font-bold  mb-12">Create an account</h3>
                            <input type="text" placeholder="First Name" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <input type="text" placeholder="Last Name" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <input type="email" placeholder="Username or Email" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <div>
                                <input type="password" placeholder="Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            </div>
                            <div>
                                <input type="password" placeholder="Confirm Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
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