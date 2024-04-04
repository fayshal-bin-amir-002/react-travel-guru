import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen flex justify-center items-center">
                <form>
                    <div className="w-full lg:w-[570px] py-[136px]">
                        <div className="border p-7 lg:p-14 rounded">
                            <h3 className="text-2xl font-bold  mb-12">Login</h3>
                            <input type="email" placeholder="Username or Email" className="mb-12 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            <div>
                                <input type="password" placeholder="Password" className="mb-6 border-b w-full py-3 focus:outline-none placeholder:text-black placeholder:font-medium" />
                            </div>
                            <div className="flex items-center justify-between mb-12">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="checkbox" className="checkbox checkbox-secondary" />
                                    <span className="label-text">Remember me</span>
                                </label>
                                <Link to="" className="font-medium text-[#F9A51A] underline">Forgot Password</Link>
                            </div>
                            <button className="btn w-full bg-[#F9A51A] mb-5">Login</button>
                            <p className="font-medium text-center">Don&apos;t have an account? <Link className="text-[#F9A51A] underline">Create an account</Link></p>
                        </div>
                        <div className="divider my-8">OR</div>
                        <div className="w-[75%] mx-auto">
                            <button className="btn btn-outline rounded-full w-full mb-2">Continue with Facebook</button>
                            <button className="btn btn-outline rounded-full w-full mb-2">Continue with Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;